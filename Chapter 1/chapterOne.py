#This is to help with the initial understanding of the process of creating a program:
#Program anlysis = studying problem to be solved
#Program specification = what exactly the program will do
#Design = writing the code
#Implementation = Translating design into a programming language
#Testing/Debugging = Finding and fixing errors
#Maintenance = Keeping the program up to date with evolving needs


print("Hello, New Python Learner!")
print("2 + 3 = ", 2 + 3)

# Creating the function named "Hello"

def hello():
    print("Hello")
    print("Computers are fun!")

hello()

def greet(person):
    print(f'Hello, {person}!')
    print("How are you?")

greet("Andrew")

print()
print("This function is illustrating choatic behavior in code")
print()

def chaos():
    x = eval(input("Enter a number between 0 and 1: "))
    y = eval(input("Enter a number between 0 and 1: "))
    print(f'X: {x:<20}   Y: {y}')
    print(f"{'-'*80}")
    for i in range(10):
        x = 3.9 * x * (1 - x)
        y = 3.9 * y * (1 - y)
        print(f'X: {x:<20}   Y: {y:<20}')


chaos()


#Modified version of the chaos theory using 20 values instead of 10
#Also modifies the user input as to the range of values that will be printed
def chaosModified():
    x = eval(input("Enter a number between 0 and 1: "))
    y = eval(input("Enter a number between 0 and 1: "))
    z = eval(input("How many numbers should I print? "))
    print(f'X: {x:<30}   | Y: {y}')
    print(f"{'-'*80}")
    for i in range(z):
        x = 3.9 * x * (1 - x)
        y = 3.9 * y * (1 - y)
        #The "4f" in this format will only allow the result to be four decimal places
        print(f'X: {x:<30.4f}   | Y: {y:<30.4f}')


chaosModified()
print()
print()

#Modified version where the user inputs how many values they want to see
#with a third value c
def chaosModified3():
    x = eval(input("Enter a number between 0 and 1: "))
    y = eval(input("Enter a number between 0 and 1: "))
    z = eval(input("Enter a number between 0 and 1: "))
    q = eval(input("How many numbers should I print? "))
    print(f'X: {x:<30}   | Y: {y:<30}  | Z: {z}')
    print(f"{'-'*80}")
    for i in range(q):
        x = 3.9 * x * (1 - x)
        y = 3.9 * y * (1 - y)
        z = 3.9 * z * (1 - z)
        #The "4f" in this format will only allow the result to be four decimal places
        print(f'X: {x:<30.4f}   | Y: {z:<30.4f}  | Z: {z:<30.4f}')


chaosModified3()
print()
print()

#Not in this Chapter but a great learning option for f-strings with dictionaries
person = {
    'name': 'Andrew',
    'age': '46',
    'sex': 'male',
}

print(f"{person.get('name')} is {person.get('age')} and is {person.get('sex')}.")
print()
print()

# This is seeking to create a dictionary with a nested dictionary with
# a for loop to print the nested dictionary information

def userInfo():
    users = {
        "person1" : {'Name': 'Andrew', 'Age': '46', 'Sex': 'male',},
        "person2" : {'Name': 'Jordan', 'Age': '24', 'Sex': 'male',},
        "person3" : {'Name': 'Hamlet', 'Age': '30', 'Sex': 'male',},
        "person4" : {'Name': 'Eric', 'Age': '33', 'Sex': 'male',},

    }
    #This for loop will access the "key" of the "users" dictionary (i.e. person1, person2, etc...)
    for persons in users:
        #This next for loop will be able to access the "key" dictionary values:
        for person in users[persons]:
            #This print below will access or return the key of the inner dictionary (i.e. Name, Age, Sex)
            print(person)

            #This print should display the value of the inner dictionary
            print(f"{person} : {users[persons]}")

            #This prints a statement using the values of the nested dictionary to call Name, Age, and Sex of user.
            print(f"{users[persons].get('Name')} is {users[persons].get('Age')} year old and is {users[persons].get('Sex')}.")

            #This should print the values within the nested dictionary:
            print(f"{person}, : {users[persons][person]}")

            #This should print an actual statement "{Name} is {Age} years old and is {Sex}" and only works if all persons are male as to pronoun "he"
            print(f"{persons} is .... {users[persons].get('Name')} and he is {users[persons].get('Age')} year old and is {users[persons].get('Sex')}.")
        

userInfo()