from urllib import response
import httplib2
from bs4 import BeautifulSoup, SoupStrainer

url = 'https://giveblockchain.io/'

http = httplib2.Http()

response, content = http.request(url)

links = []

for link in BeautifulSoup(content, 'html.parser').find_all('a', href=True):
    links.append(link['href'])

for link in links:
    print(link)
