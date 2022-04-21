import email
from json import load
import dotenv
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
from dotenv import load_dotenv
import time
import sys

load_dotenv()

driver = webdriver.Chrome()
driver.implicitly_wait(2)

def summary_viewall():
    summaryMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Summary")
    summaryMenu.click()
    time.sleep(2)

    view_all = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="VIEW ALL")
    view_all.click()
    time.sleep(2)

#Creating a function to call the other functions in this module
def prices_page():
    #Log in to App
    driver.get('https://app.giveblockchain.io/login')
    username = driver.find_element(By.ID, 'email').send_keys(os.getenv("EMAIL"))
    password = driver.find_element(By.ID, 'input-22').send_keys(os.getenv("PASSWORD"), Keys.ENTER)
    expected_title = 'Current Prices'
    actual_title = driver.find_elements(By.XPATH, "//div[@class='v-card__title']")[1].text

    if expected_title == actual_title:
        print(f"Login to correct page {'.'*10} Successful!")
        print()

    else:
        print(f"Login to correct page {'.'*10} Failed!")
        print()

    view_all = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="VIEW ALL")
    view_all.click()
    time.sleep(2)

    bitcoin_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='Bitcoin']")
    bitcoin_button.click()
    time.sleep(2)

    summary_viewall()

    ethereum_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='Ethereum']")
    ethereum_button.click()
    time.sleep(2)

    summary_viewall()

    xrp_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='XRP']")
    xrp_button.click()
    time.sleep(2)

    summary_viewall()

    bitcash_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='Bitcoin Cash']")
    bitcash_button.click()
    time.sleep(2)

    summary_viewall()

    litecoin_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='Litecoin']")
    litecoin_button.click()
    time.sleep(2)

    summary_viewall()

    cardano_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='Cardano']")
    cardano_button.click()
    time.sleep(2)

    summary_viewall()

    gala_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='Gala']")
    gala_button.click()
    time.sleep(2)

    summary_viewall()

    iota_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='IOTA']")
    iota_button.click()
    time.sleep(2)

    summary_viewall()

    dash_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='Dash']")
    dash_button.click()
    time.sleep(2)

    summary_viewall()

    nem_button = driver.find_element(by=By.XPATH, value="//td[normalize-space()='NEM']")
    nem_button.click()
    time.sleep(2)

    summary_viewall()


prices_page()