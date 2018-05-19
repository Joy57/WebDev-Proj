from bs4 import BeautifulSoup
import requests
import csv

source = requests.get('http://coreyms.com').text
soup = BeautifulSoup(source, 'lxml')

csv_file = open('scrape.csv', 'w')

csv_writer = csv.writer(csv_file)
csv_writer.writerow(['headline', 'summary', 'youtube_link'])
# print(soup.prettify()) 

for article in soup.find_all('article'):
    headline = article.h2.a.text
    print(headline)
    summary = article.find('div', class_='entry-content').p.text
    try:
        vid_src = article.find('iframe', class_='youtube-player')['src']
        # getting youtube's video id
        vid_id = vid_src.split('/')[4]
        vid_id = vid_id.split('?')[0]
        yt_link = f'https://youtube.com/watch?v={vid_id}'

    except Exception as e:
        yt_link = None

    print(yt_link)
    print()
    csv_writer.writerow([headline, summary, yt_link])

