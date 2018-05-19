from bs4 import BeautifulSoup
import requests

with open ('home.html', 'r') as html_doc:
    soup = BeautifulSoup(html_doc, 'lxml')
for data in soup.find_all('div',class_='article'):
    headline = data.h1.text
    print(headline)