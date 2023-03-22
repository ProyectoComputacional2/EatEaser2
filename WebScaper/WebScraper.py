import csv
import os
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time
import csv
import os
import pandas as pd
from pytube import YouTube
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import glob




AUDIO_SAVE_DIRECTORY = "./audio"


def ScrapCommentandInfo(url):
    #inicializacion de selenium y webdriver
    option = webdriver.ChromeOptions()
    option.add_argument("--headless")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=option)
    driver.get(url)

    #funcion para recorrer la pagina mediante scroll para cargar mas comentarios lo he limitado a 20 recorridas ya que
    #tardaria un monton en recorrer un video con mas de 100 comentarios
    prev_h = 0
    for i in range(20):
        height = driver.execute_script("""
                function getActualHeight() {
                    return Math.max(
                        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                        Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
                        Math.max(document.body.clientHeight, document.documentElement.clientHeight)
                    );
                }
                return getActualHeight();
            """)
        driver.execute_script(f"window.scrollTo({prev_h},{prev_h + 200})")
        time.sleep(1)
        prev_h +=200  
    
    #funcion en beautifulsoup para extraer titulo, autor, id del vido y los comentarios
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    driver.quit()
    title_text_div = soup.select_one('#container h1')
    video_id = url.split('watch?v=')[1]
    titleforCSV = f'comments_{video_id}'
    title = title_text_div and title_text_div.text
    elementauthor = soup.find(class_="yt-simple-endpoint style-scope yt-formatted-string")
    authortext = elementauthor.text
    print(authortext)
    # extract the text using .text property
    
    comment_div = soup.select("#content #content-text")
    comment_list = [x.text for x in comment_div]
    #print (title)
    
    # Escribir valores del video (video_id, title y autor) a un CSV

    csv_file = "video_info.csv"
    file_exists = os.path.isfile(csv_file)
    with open(csv_file, mode='a', newline='') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(['video_id', 'title', 'authortext'])
        writer.writerow([video_id, title, authortext])

    # Escribir y crear un CSV con los comentarios del video
    output_file = "comments.csv"
    with open(output_file, 'a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        for comment in comment_list:
            writer.writerow([video_id, comment])
    
#posiblemente roto por ahora, API de Youtube no va(pytube)
def ScrapText(url):

    print('function started with url: ' + url)
    video = YouTube(url)
    audio = video.streams.filter(only_audio = True).first()

    try:
        audio.download(AUDIO_SAVE_DIRECTORY)
    except:
        print("Failed to download audio")
    print("audio was downloaded successfully")
    


if __name__ == "__main__":
    
    #lista de URLs
    urls = [
        "https://www.youtube.com/watch?v=tXQ7G2p3hJ8",
        "https://www.youtube.com/watch?v=pB2Yf-EewJs",
        "https://www.youtube.com/watch?v=6Op0Ce5in-s",
        "https://www.youtube.com/watch?v=uPb6Yiu4N3E",
        "https://www.youtube.com/watch?v=1MyYvZ9RrTg",
        "https://www.youtube.com/watch?v=0tOpnSIBueU",
    ]

    output_file = "comments.csv"

    with open(output_file, 'a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["video_id","Comment"])

    for url in urls:
        ScrapCommentandInfo(url)
        #ScrapText(url)

        # Leer CSV 

    
    df = pd.read_csv(output_file)

    # Instanciar el analizador de sentimientos de VADER
    analyzer = SentimentIntensityAnalyzer()

    # Realizar análisis de sentimientos en los comentarios
    df["Sentiment"] = df["Comment"].apply(lambda x: analyzer.polarity_scores(x))
    df = pd.concat([df.drop(['Sentiment'], axis=1), df['Sentiment'].apply(pd.Series)], axis=1)

    # Ecribir Valor de Analisis de Sentimiento
    df.to_csv(output_file, index=False)

