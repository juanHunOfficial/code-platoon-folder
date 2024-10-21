def linear_search(desired_num: int,             junk_arr: list)             -> int: #syntax below:
    #------------(parameter): expected pass     (parameter): expected pass  -> expected return value
    for index in range(len(junk_arr)):
        if junk_arr[index] == desired_num:
            return index
    
    return -1 #will only run if the for loop gets nothing