# Create imports
from bs4 import BeautifulSoup
import requests


# Scrape Function 
def scrape(): 
  # Url we will be scraping
  url = "https://www.wepc.com/news/video-game-statistics/"
  results = requests.get(url).text
  doc = BeautifulSoup(results, "html.parser")
  print(doc)
scrape()