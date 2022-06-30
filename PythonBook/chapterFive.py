# def introduction():
#     firstName = input("What is your first name? ")
#     lastName = input("What is your last name? ")
#     print(f"Hello, {firstName} {lastName}!")


# introduction()

# # Receiving error "ValueError: too many values to unpack (expected 2)" and unable to figure it out, works with numeric variables
# # But not a string
# def introduction2():
#     firstName, lastName = input("What is your first and last name separated by a comma: ")
#     print(f"Hello, {firstName}, {lastName}!")
#     print({firstName})
#     print({lastName})


# introduction2()

# #Example lessons for indexing and slicing strings
# def example_indexes_slices():
#     greet = "Hello Bob"
#     x = 8
#     print(greet[0])
#     print(greet[1], greet[4], greet[6])
#     print(greet[x-2])
#     print(greet[-3], greet[-2], greet[-1])
#     print(greet[0:3])
#     print(greet[2:6])
#     print(greet[3:])
#     print(greet[:])


# example_indexes_slices()

# # Examples of repetition and length of strings
# def example_rep_length():
#     greet = "Hello Bob "
#     print(len(greet))
#     print(f"{greet*3}")
#     print(len(f"{greet*3}"))


# example_rep_length()

# def str_op():
#     for ch in "Spam!":
#         print(ch, end=" - ")


# str_op()

# # This program will create a computer generated username
# def username():
#     first_name = input("What is your first name: ")
#     middle_name = input("What is your middle name: ")
#     last_name = input("What is your last name: ")
#     uname = first_name[0] + last_name[:6]
#     u_name = first_name[:3] + middle_name[:3] + last_name[:3]
#     print(f"Your username is: {uname.lower()}")
#     print(f"Your username is: {u_name.lower()}")


# username()

# def month_choice():
#     month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
#     n = eval(input("Enter a month number (1-12): "))
#     month_number = month[n-1]
#     print(month_number)


# month_choice()

# # A program to convert a string of Unicode numbers into a Gibberish string of text

# def gibberish():
#     print('A program to convert a string of Unicode numbers into a Gibberish string of text:')

#     inString = input("Please enter a random set of Unicode numbers: ")

#     message = " "
#     for numStr in inString.split():
#         codeNum = eval(numStr)
#         message = message + chr(codeNum)

#     print(f"The decoded gibberish message is: {message}")


# gibberish()

def method_lists():
    squares = []

    for x in range(3,101):
        squares.append(x*x)
        print(squares)


method_lists()