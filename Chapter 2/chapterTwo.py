#This is to help with the initial understanding of the process of creating a program:
#Program anlysis = studying problem to be solved
#Program specification = what exactly the program will do
#Design = writing the code
#Implementation = Translating design into a programming language
#Testing/Debugging = Finding and fixing errors
#Maintenance = Keeping the program up to date with evolving needs

#Refactoring the chaos theory assigning variables in one statement
def chaosModified3():
    x, y, z = eval(input("Enter three numbers between 0 and 1 separated by a comma: "))
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

# This will show the average of two test scores:
def testScores():
    print("This program computes the average of two test scores.")

    score1, score2 = eval(input("Enter two test scores separated by a comma: "))
    average = (score1 + score2) / 2

    print(f"The average test of {score1} + {score2} = {average}")


testScores()

#This will show the average of however many test scores the user specifies they have.
def testScores():
    print("This program computes the average of three test scores.")
    test_amount = eval(input("How many test scores do you have to input? "))
    total = 0
    for score in range(test_amount):
        scores = eval(input("Please enter the test scores in order:  "))
        total += scores

    
    print(total)
    average = (total) / (test_amount)

    print(f"The average score for {test_amount} tests = {average}")


testScores()

#This will print, 0*0, 1*1, 2*2, etc...
for i in range(5):
    print(i * i)

# #This will print the list of numbers in an individual row
for d in [3, 1, 4, 1, 5]:
    print(d)

# This will print the list in the same row with a space between the list of numbers. If you put a symbol in the " " 
# it will print that character between the list of numbers
for d in [3, 1, 4, 1, 5]:
    print(d, end=" ")

print()

#Will separate the list by the character given.
#The keyword "sep" acts like "end" it appears
for e in [3, 1, 4, 1, 5]:
    print(e, sep = ', ')

print()


# # #This will print Hello five times in the same row with a space between each Hello
for h in range(5):
    print("Hello", end=" ")

print()
for r in range(5):
    print(r, r**2)

print("Start")
for i in range(0):
    print("Hello")

print("End")

#This is a solution/program to convert Celsisu temps to Fahrenheit

def conversion():
    for d in range(5):
        celsius = eval(input("What is the Celsius temperature? "))
        fahrenheit = 9/5 * celsius +32
        print(f'The temperature is {fahrenheit} degrees fahrenheit.')


conversion()

#This solution is to use the convert program to print a table of two columns
#showing the degree of Celsius every 10 degrees and its fahrenheit equivalent in the second column

def conversion2():
    print(f'Celsius:     | Fahrenheit: ')
    print(f"{'-'*30}")
    for d in [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]:
        fahrenheit = 9/5 * d +32
        celsius = d
        print(f'{celsius:<12} | {fahrenheit}')


conversion2()
print()


def futval():

    print("This program calculates the furture value of a investment.")

    principle = eval(input("Enter the initial principle value: "))
    apr = eval(input("Enter the annual interest rate: "))
    years_invested = eval(input("Enter the number of years for this investment: "))

    for i in range(years_invested):
        principle = principle * (1 + apr)
        i = i +1
        print(f"The {i} year principle is: ${principle}")

    print()


    print(f"The total principle value in {years_invested} years is: {principle:,.2f}")


futval()


def futval2():


    print("This program calculates a fixed investement over a specified number of years")

    principle = eval(input("Enter the initial principle investment value: "))
    ir = (float(input("Enter the annual interest rate: ")))/100
    years_invested = eval(input("Enter the number of years for this investment: "))
    yearly_compound = 1

    for i in range(years_invested):
        capital_gain = principle * (pow((1 + (ir/yearly_compound)), yearly_compound * years_invested))
        i = i +1
        roi = capital_gain - principle
        print(f"The {i} year principle is: ${roi:,.2f}")

    print()


    print(f"The total principle value in {years_invested} years is: {roi:,.2f} ")
    print()


futval2()