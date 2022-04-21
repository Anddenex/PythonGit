from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


driver = webdriver.Chrome()
driver.implicitly_wait(2)

def dashboard_menu_click():
    dashboardMenu = driver.find_element(by=By.PARTIAL_LINK_TEXT, value="Dashboard")
    dashboardMenu.click()


#Creating a function to call the other functions in this module
def dashboard_page():
    #Log in to App
    driver.get('https://app.giveblockchain.io/login')
    username = driver.find_element(By.ID, 'email').send_keys('aexon@nerdsunite.me')
    password = driver.find_element(By.ID, 'input-22').send_keys('IAmThe#1Nerd!', Keys.ENTER)
    dashboard_menu_click()
    time.sleep(10)
    expected_dashboard_title = 'MY BALANCE'
    actual_dashboard_title = driver.find_elements(By.XPATH, "//div[@class='wpb_text_column wpb_content_element ']")[0].text

    if expected_dashboard_title == actual_dashboard_title:
        print(f"Dashboard menu link click {'.'*10} Successful!")
        print()

    else:
        print(f"Dashboard menu link click {'.'*10} Failed!")
        print()

    my_balances_button = driver.find_elements(By.XPATH, "//div[@class='vc_column-inner']")[4]
    my_balances_button.click()
    time.sleep(2)

    dashboard_menu_click()
    time.sleep(5)

    my_licenses_button = driver.find_elements(By.XPATH, "//div[@class='vc_column-inner']")[5]
    my_licenses_button.click()
    time.sleep(2)

    dashboard_menu_click()
    time.sleep(5)

    my_licenses_button = driver.find_elements(By.XPATH, "//div[@class='vc_column-inner']")[6]
    my_licenses_button.click()
    time.sleep(2)

    dashboard_menu_click()
    time.sleep(5)

    my_licenses_button = driver.find_elements(By.XPATH, "//div[@class='vc_column-inner']")[7]
    my_licenses_button.click()
    time.sleep(2)

    dashboard_menu_click()
    time.sleep(5)


dashboard_page()