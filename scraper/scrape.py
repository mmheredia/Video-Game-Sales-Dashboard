# Create imports
from bs4 import BeautifulSoup
from splinter import Browser
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
import requests

def scrape(): 
  url = "https://www.wepc.com/news/video-game-statistics/"
  
  results = requests.get(url).text
  doc = BeautifulSoup(results, "html.parser")
  print(doc)
scrape()