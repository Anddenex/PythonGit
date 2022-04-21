from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import os
from dotenv import load_dotenv
import time
import sys

load_dotenv()


driver = webdriver.Chrome()
driver.implicitly_wait(5)


#Give
driver.get('https://app.giveblockchain.io/login')
username = driver.find_element(By.ID, 'email')
username.send_keys(os.getenv("EMAIL"))
password = driver.find_element(By.ID, 'input-22')
password.send_keys(os.getenv("PASSWORD"), Keys.ENTER)
expected_text = 'Current Prices'
actual_text = driver.find_elements(By.XPATH, "//div[@class='v-card__title']")[1].text
# assert expected_text == actual_text, f'Error. Expected text: {expected_text}, but actual text: {actual_text}'

if expected_text == actual_text:
    print('Successful')

else:
    print('Fail!')

driver.quit()