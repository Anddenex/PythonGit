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

#This is the intial login to the App.
def log_in():
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


# Function confirms the inventory main navigation link is directing to the right page
def inventory_page():   
    inventoryMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Inventory")
    inventoryMenu.click()
    time.sleep(3)
    expected_inventory_title = 'Balances'
    actual_inventory_title = driver.find_element(By.XPATH, "//div[@class='v-card__title']").text

    if expected_inventory_title == actual_inventory_title:
        print(f"Inventory menu link click {'.'*10} Successful!")
        print()

    else:
        print(f"Inventory menu link click  {'.'*10} Failed!")
        print()


# Function confirms the node main navigation link is directing to the right page

def node_page():
    nodeMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Nodes")
    nodeMenu.click()
    time.sleep(3)
    expected_nodes_title = 'Give Node Info'
    actual_nodes_title = driver.find_element(By.XPATH, "//div[@class='v-card__title text-capitalize']").text

    if expected_nodes_title == actual_nodes_title:
        print(f"Nodes menu link click {'.'*10} Successful!")
        print()

    else:
        print(f"Nodes menu link click {'.'*10} Failed!")
        print()


# Function confirms the vault main navigation link is directing to the right page

def vault_page():
    vaultMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Vault")
    vaultMenu.click()
    time.sleep(3)

    expected_vault_title = 'Vault Items'
    actual_vault_title = driver.find_element(By.XPATH, "//div[@class='v-card__title']").text

    if expected_vault_title == actual_vault_title:
        print(f"Vault menu link click {'.'*10} Successful!")
        print()

    else:
        print(f"Vault menu link click {'.'*10} Failed!")
        print()


# Function confirms the Summary main navigation link is directing to the right page

def summary_page():
    summaryMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Summary")
    summaryMenu.click()
    time.sleep(3)
    expected_title = 'Current Prices'
    actual_title = driver.find_elements(By.XPATH, "//div[@class='v-card__title']")[1].text

    if expected_title == actual_title:
        print(f"The title '{expected_title}' is confirmed! Directed to the right page. ")
        print()

    else:
        print(f"The title '{expected_title}' is a confirmed defect! Directed to the wrong page.")
        print()

#This function confirms the Dashboard navigation link is directing to the right page

def dashboard_page():
    dashboardMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Dashboard")
    dashboardMenu.click()
    expected_dashboard_title = 'MY BALANCE'
    actual_dashboard_title = driver.find_elements(By.XPATH, "//div[@class='wpb_text_column wpb_content_element ']")[0].text

    if expected_dashboard_title == actual_dashboard_title:
        print(f"Dashboard menu link click {'.'*10} Successful!")
        print()

    else:
        print(f"Dashboard menu link click {'.'*10} Failed!")
        print()


#The functions below are functions for the Summary page
def current_prices():
    expected_title = 'Current Prices'
    actual_title = driver.find_elements(By.XPATH, "//div[@class='v-card__title']")[1].text

    if expected_title == actual_title:
        print(f"The title '{expected_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_title}' is a confirmed defect! The actual title is '{actual_title}'! ")
        print()


def summary_first_section():
    expected_introduction_title = 'Hi, Andrew! Your balance is:'
    actual_introduction_title = driver.find_element(By.XPATH, "//div[@class='v-card__title pa-0 font-weight-medium title']").text

    if expected_introduction_title == actual_introduction_title:
        print(f"The title '{expected_introduction_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_introduction_title}' is a confirmed defect! The actual title is '{actual_introduction_title}'!")
        print()


def summary_first_section_dollar():
    expected_balance_title = '$0.00'
    actual_balance_title = driver.find_element(By.XPATH, "//div[@class='v-card__text pa-0 money']").text

    if expected_balance_title == actual_balance_title:
        print(f"The title '{expected_balance_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_balance_title}' is a confirmed defect! The actual title is '{actual_balance_title}'!")
        print()


def summary_second_section_mining():
    expected_mining_title = 'Next. Level. Mining.'
    expected_button_text = "GET PRODUCT NAME"
    actual_mining_title = driver.find_elements(By.XPATH, "//div[@class='v-card__title']")[0].text
    actual_button_text = driver.find_element(By.XPATH, "//div[@class='v-card__actions']").text


    if expected_mining_title == actual_mining_title:
        print(f"The title '{expected_mining_title}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_mining_title}' is a confirmed defect! The actual title is '{actual_mining_title}'! ")
        print()

    if expected_button_text == actual_button_text:
        print(f"The title '{expected_button_text}' is confirmed!")
        print()

    else:
        print(f"The title '{expected_button_text}' is a confirmed defect! The actual title is '{actual_button_text}'! ")
        print()


def button_click():
    view_all = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="VIEW ALL")
    view_all.click()
    time.sleep(1)

    summaryMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Summary")
    summaryMenu.click()
    time.sleep(1)

    #This is currently a bug as the link is directing to Switch now for some reason. Bug ticket submitted and will wait for it to be fixed.
    get_product_name = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="GET PRODUCT NAME")
    get_product_name.click()


if __name__ == "__main__":
    log_in()
    inventory_page()
    node_page()
    vault_page()
    summary_page()
    dashboard_page()
    current_prices()
    summary_first_section()
    summary_first_section_dollar()
    summary_second_section_mining()
    button_click()