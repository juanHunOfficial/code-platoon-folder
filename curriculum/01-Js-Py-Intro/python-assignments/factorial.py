def factorial(number):
    #catch the easy terminations
    if number == 1 or number == 0:
        return 1
    #initialize sum to hold the total Note: start at 1 because anything * 0 is 0
    sum = 1
    #regular factorial expression and return
    for i in range(number, 1, -1):
        sum *= i
    return sum

print(factorial(0))  #1
print(factorial(1))  #1
print(factorial(5))  #120
print(factorial(6)) #720
print(factorial(7)) #5040