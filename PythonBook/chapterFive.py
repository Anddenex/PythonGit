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

#Example lessons for indexing and slicing strings
def example_indexes_slices():
    greet = "Hello Bob"
    x = 8
    print(greet[0])
    print(greet[1], greet[4], greet[6])
    print(greet[x-2])
    print(greet[-3], greet[-2], greet[-1])
    print(greet[0:3])
    print(greet[2:6])
    print(greet[3:])
    print(greet[:])


example_indexes_slices()

# Examples of repetition and length of strings
def example_rep_length():
    greet = "Hello Bob "
    print(len(greet))
    print(f"{greet*3}")
    print(len(f"{greet*3}"))


example_rep_length()

