from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import website_functions
import sys

driver = webdriver.Chrome()
driver.implicitly_wait(5)

# Checking account log in and main navigation directing to the right page
def account_login():
    website_functions.log_in()
    website_functions.inventory_page()
    website_functions.node_page()
    website_functions.vault_page()
    website_functions.summary_page()
    website_functions.dashboard_page()


account_login()

driver.quit()