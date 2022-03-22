from urllib import response
import requests

# The code below has some code commented out that I tried different options and the code below is the one that is active.

# def givecharityurls():
#     urls = [
#         "https://giveblockchain.io/",
#         "https://giveblockchain.io/give-information/",
#         "https://giveblockchain.io/mission/",
#         "https://giveblockchain.io/give-node-information/",
#         "https://giveblockchain.io/give-app-information/",
#         "https://giveblockchain.io/lets-give/",
#         "https://giveblockchain.io/login/",
#         "https://twitter.com/giveblockchain_",
#         "https://www.facebook.com/giveblockchain",
#         "https://www.instagram.com/give_blockchain/",
#         "https://giveblockchain.io/givers-information/",
#         "https://giveblockchain.io/save-information/",
#         "https://giveblockchain.io/water-information/",
#         "https://giveblockchain.io/humanitarian-information/",   
#         "https://giveblockchain.io/submit-a-proposal/",
#         "https://giveblockchain.io/mission-information/",  
#         "https://giveblockchain.io/privacy-policy/",
#         "https://giveblockchain.io/terms-of-use/", 
#         "https://giveblockchain.io/give-to-give/",
#         "https://giveblockchain.io/all-give-products/",
#     ]

#     for url in urls:

#         response = requests.get(url)
#         # print(f'The response code for {url} is {response.status_code}')

#         if response.status_code == 200:
#             count_url = " "  
#             count_url = count_url.count(' ')  
#             count_url = count_url
#             url_count = count_url + 1
#             print(f"The response code for {url} is {response.status_code} {'.'*30} OK")
#             print(f'The number of 200 status codes URLs is: {url_count}')

#         else:
#             print(f"The url: {url} is {response.status_code} {'.'*30} borked")


# givecharityurls()


def giveurls():
    urls = [
        "https://giveblockchain.io/",
        "https://giveblockchain.io/give-information/",
        "https://giveblockchain.io/mission-information/",
        "https://giveblockchain.io/mission/",
        "https://giveblockchain.io/give-node-information/",
        "https://giveblockchain.io/give-app-information/",
        "https://giveblockchain.io/lets-give/",
        "https://giveblockchain.io/login/",
        "https://twitter.com/giveblockchain_",
        "https://www.facebook.com/giveblockchain",
        "https://www.instagram.com/give_blockchain/",
        "https://giveblockchain.io/givers-information/",
        "https://giveblockchain.io/save-information/",
        "https://giveblockchain.io/water-information/",
        "https://giveblockchain.io/humanitarian-information/",   
        "https://giveblockchain.io/submit-a-proposal/",
        "https://giveblockchain.io/mission-information/",  
        "https://giveblockchain.io/privacy-policy/",
        "https://giveblockchain.io/terms-of-use/", 
        "https://giveblockchain.io/givers-evelien-holsken/",
        "https://giveblockchain.io/givers-evelien-holsken-25/",
        "https://giveblockchain.io/givers-evelien-holsken-50/",
        "https://giveblockchain.io/givers-evelien-holsken-100/",
        "https://giveblockchain.io/givers-evelien-holsken-500/",
        "https://giveblockchain.io/givers-arjan-erkel/",
        "https://giveblockchain.io/givers-arjan-erkel-25/",
        "https://giveblockchain.io/givers-arjan-erkel-50/",
        "https://giveblockchain.io/givers-arjan-erkel-100/",
        "https://giveblockchain.io/givers-arjan-erkel-500/",
        "https://giveblockchain.io/givers-john-renouard/",
        "https://giveblockchain.io/givers-john-renouard-25/",
        "https://giveblockchain.io/givers-john-renouard-50/",
        "https://giveblockchain.io/givers-john-renouard-100/",
        "https://giveblockchain.io/givers-john-renouard-500/",
        "https://giveblockchain.io/givers-justin-lindsay-bowen/",
        "https://giveblockchain.io/givers-justin-lindsay-bowen-25/",
        "https://giveblockchain.io/givers-justin-lindsay-bowen-50/",
        "https://giveblockchain.io/givers-justin-lindsay-bowen-100/",
        "https://giveblockchain.io/givers-justin-lindsay-bowen-500/",
        "https://giveblockchain.io/about-us/",
        "https://giveblockchain.io/all-give-products/",
        "https://giveblockchain.io/give-to-give/",
    ]

    for url in urls:

        response = requests.get(url)
        response_code = response.status_code
        # print(f'The response code for {url} is {response.status_code}')

        if response_code == 200:
            counts = response_code
            print(f'The number of 200 status codes URLs is: {response_code}')
            print(counts)

        # if response.status_code == 200:
        #     count_url = " "  
        #     count_url = count_url.count(' ')  
        #     count_url = count_url
        #     url_count = count_url + 1
        #     print(f"The response code for {url} is {response.status_code} {'.'*30} OK")
        #     print(f'The number of 200 status codes URLs is: {url_count}')

        else:
            print(f"The url: {url} is {response.status_code} {'.'*30} borked")


giveurls()