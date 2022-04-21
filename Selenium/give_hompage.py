from xml.dom.minidom import Element
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
driver.implicitly_wait(5)

#Visit Give Home Page Website
driver.get("https://giveblockchain.io/")

#Confirm Main Image is displaying
giveLink = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Give")
giveLink.click()

time.sleep(3)

#Retun to the hompage, or landing page, via a logo click
giveLogo = driver.find_element(by=By.ID, value="logo")
giveLogo.click()

time.sleep(3)

#Confirm the Mission link is working and directs to right page
missionLink = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Mission")
missionLink.click()

time.sleep(3)

#Retun to the hompage, or landing page, via a logo click
giveLogo = driver.find_element(by=By.ID, value="logo")
giveLogo.click()

time.sleep(3)

#Confirm the Blockchain link is working and directs to the right page
blockchainLink = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Blockchain")
blockchainLink.click()

time.sleep(3)

#Retun to the hompage, or landing page, via a logo click
giveLogo = driver.find_element(by=By.ID, value="logo")
giveLogo.click()

time.sleep(3)

#Confirm the login link works and directs to the login page
loginLink = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Login")
loginLink.click()

expected_login_title = "Login to access your account:"
actual_login_title = driver.find_element(By.TAG_NAME, "h5").text

if expected_login_title == actual_login_title:
    print(f"The title '{expected_login_title}' is confirmed!")
    print()

else:
    print(f"The title '{expected_login_title}' is a confirmed defect! The actual title is '{actual_login_title}'! ")
    print()

#Log in to App
username = driver.find_element(By.ID, 'user_login').send_keys(os.getenv("EMAIL"))
password = driver.find_element(By.ID, 'user_pass').send_keys(os.getenv("PASSWORD"), Keys.ENTER)

# The Logo on the signup page is no longer there so will need to we work this test case to finish on the login page.
# Retun to the hompage, or landing page, via a logo click
giveLogo = driver.find_element(by=By.ID, value="logo")
giveLogo.click()

time.sleep(3)

#Confirm the Sing Up Free link is working and directing to the right page
signUpLink = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Sign Up Free")
signUpLink.click()

time.sleep(3)



driver.quit()