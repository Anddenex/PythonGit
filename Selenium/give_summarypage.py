from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import website_functions

driver = webdriver.Chrome()
driver.implicitly_wait(2)

#Log into App and test menus
def summary_page():
    website_functions.log_in()

    # Confirm the First Section of the Summary/Home page of App
    website_functions.summary_first_section()
    website_functions.summary_first_section_dollar()

    #Confirm the "Next Level Mining" section of Summary/Home page of App
    website_functions.summary_second_section_mining()

    #Invetory Crypto Section:
    website_functions.current_prices()

    #Button Clicks to confirm they direct to the right page
    website_functions.button_click()

summary_page()


driver.quit()