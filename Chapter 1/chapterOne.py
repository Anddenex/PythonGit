
print("Hello, New Python Learner!")
print("2 + 3 = ", 2 + 3)

# Creating the function named "Hello"

# def hello():
#     print("Hello")
#     print("Computers are fun!")

# hello()

# def greet(person):
#     print(f'Hello, {person}!')
#     print("How are you?")

# greet("Andrew")

print()
print("This function is illustrating choatic behavior in code")
print()

def main():
    x = eval(input("Enter a number between 0 and 1: "))
    y = eval(input("Enter a number between 0 and 1: "))
    print(f'X: {x:<20}   Y: {y}')
    print(f"{'-'*80}")
    for i in range(10):
        x = 3.9 * x * (1 - x)
        y = 3.9 * y * (1 - y)
        print(f'X: {x:<20}   Y: {y:<20}')


main()



