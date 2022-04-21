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

def return_to_inventory():
    summaryMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Inventory")
    summaryMenu.click()
    time.sleep(1)

def inventory_page_check():
    expected_inventory_title = 'Balances'
    actual_inventory_title = driver.find_element(By.XPATH, "//div[@class='v-card__title']").text

    if expected_inventory_title == actual_inventory_title:
        print(f"Inventory menu link click {'.'*10} Successful!")
        print()

    else:
        print(f"Inventory menu link click  {'.'*10} Failed!")
        print()


#Creating a function to call the other functions in this module
def inventory():
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

    #Click on the Inventory main navigation
    inventoryMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Inventory")
    inventoryMenu.click()
    time.sleep(3)

    inventory_page_check()

    #Setting up variable to confirm the title text for the crypto coin is accurate
    expected_bitcoin_title = "Bitcoin"
    expected_etherium_title = "Ethereum"
    expected_gala_title = "Gala"
    expected_blue_title = "Blue"
    expected_green_title = "green"
    expected_win_title = "Win"

    #Returning a response if the title is accurate or inaccurate.
    actual_bitcoin_title = driver.find_elements(By.XPATH, "//div[@class='v-avatar mr-2']")[1].text

    if expected_bitcoin_title == actual_bitcoin_title:
        print(f"The title '{expected_bitcoin_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_bitcoin_title}' is a confirmed defect! The actual title is '{actual_bitcoin_title}'! ")
        print()

    actual_etherium_title = driver.find_elements(By.XPATH, "//div[@class='v-avatar mr-2']")[1].text

    if expected_etherium_title == actual_etherium_title:
        print(f"The title '{expected_etherium_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_etherium_title}' is a confirmed defect! The actual title is '{actual_etherium_title}'! ")
        print()

    actual_gala_title = driver.find_elements(By.XPATH, "//div[@class='v-avatar mr-2']")[1].text

    if expected_gala_title == actual_gala_title:
        print(f"The title '{expected_gala_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_gala_title}' is a confirmed defect! The actual title is '{actual_gala_title}'! ")
        print()

    actual_blue_title = driver.find_elements(By.XPATH, "//div[@class='v-avatar mr-2']")[1].text

    if expected_blue_title == actual_blue_title:
        print(f"The title '{expected_blue_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_blue_title}' is a confirmed defect! The actual title is '{actual_blue_title}'! ")
        print()

    actual_green_title = driver.find_elements(By.XPATH, "//div[@class='v-avatar mr-2']")[1].text

    if expected_green_title == actual_green_title:
        print(f"The title '{expected_green_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_green_title}' is a confirmed defect! The actual title is '{actual_green_title}'! ")
        print()

    actual_win_title = driver.find_elements(By.XPATH, "//div[@class='v-avatar mr-2']")[1].text

    if expected_win_title == actual_win_title:
        print(f"The title '{expected_win_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_win_title}' is a confirmed defect! The actual title is '{actual_win_title}'! ")
        print()

    #This section will check the click to confirm we are directing to the right bitcoin page
    bitcoin_button = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Bitcoin")
    bitcoin_button.click()
    time.sleep(2)
    return_to_inventory()

    ethereum_button = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Ethereum")
    ethereum_button.click()
    time.sleep(2)
    return_to_inventory()

    gala_button = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Gala")
    gala_button.click()
    time.sleep(2)
    return_to_inventory()

    blue_button = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Blue")
    blue_button.click()
    time.sleep(2)
    return_to_inventory()

    green_button = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="green")
    green_button.click()
    time.sleep(2)
    return_to_inventory()

    win_button = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Win")
    win_button.click()
    time.sleep(2)
    return_to_inventory()
    time.sleep(5)
    inventory_page_check()


inventory()