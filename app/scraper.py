# Imports
from bs4 import BeautifulSoup
from splinter import Browser
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
import requests

# Scrape Function


def scrape():
    # Splinter set up
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=False)
    # Create dictonary instancec)
    dict = {}
    # URL
    url = "https://www.wepc.com/news/video-game-statistics/"
    # Request response from URL
    browser.visit(url)
    # Assign the document grab to a variable


scrape()
