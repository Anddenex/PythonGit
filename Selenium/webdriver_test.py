from selenium import webdriver


driver = webdriver.Chrome()
driver.get("https://www.google.com")

title = driver.title

print(driver.title)
if title == "Google":
    print(f"The title '{title}' is accurate for this test!")

else:
    print(f"The title is not accurate write up a ticket!")

print(driver.current_url)

driver.quit()

