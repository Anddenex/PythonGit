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

# #This will show the average of two test scores:
def testScores():
    print("This program computes the average of two test scores.")

    score1, score2 = eval(input("Enter two test scores separated by a comma: "))
    average = (score1 + score2) / 2

    print(f"The average test of of {score1} + {score2} = {average}")


testScores()

#This will print, 0*0, 1*1, 2*2, etc...
for i in range(5):
    print(i * i)

# #This will print the list of numbers in an individual row
for d in [3, 1, 4, 1, 5]:
    print(d)

# #This will print the list in the same row with a space between the list of numbers. If you put a symbol in the " " 
# # it will print that character between the list of numbers
for d in [3, 1, 4, 1, 5]:
    print(d, end=" ")

print()

#Will separate the list by the character given.
#The keyword "sep" acts like "end" it appears
for e in [3, 1, 4, 1, 5]:
    print(e, sep = ', ')

print()


# #This will print Hello five times in the same row with a space between each Hello
for h in range(5):
    print("Hello", end=" ")

print()
for r in range(5):
    print(r, r**2)


print("Start")
for i in range(0):
    print("Hello")

print("End")

