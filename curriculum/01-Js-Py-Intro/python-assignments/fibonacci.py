def find_fibonacci(number):
    #initializing the array we will be appending to
    sequence = [0, 1]
    #quick termination for the values we already have
    if(number == 0):
        return sequence[0]
    elif(number == 1):
        return sequence[1]
    #loop to find the value of the current fibonacci sequence
    #start at 2 because you already have 0 and 1 above
    #the range as 1 to the number to avoid the out of bounds error (makes the function
    # inculsive instead of exclusive)
    for i in range(2, number +1):
        next_value = sequence[i -1] + sequence[i -2]
        sequence.append(next_value)
        
    return sequence[number]
print(find_fibonacci(3)) # 2
print(find_fibonacci(7)) # 13