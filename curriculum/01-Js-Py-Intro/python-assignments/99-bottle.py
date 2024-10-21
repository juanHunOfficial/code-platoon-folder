bottles_of_beer = 99

for beer in range(bottles_of_beer, 1, -1):
    bottles = lambda x: ("bottles" if x > 1 else "bottle")
    bottle_output = bottles(beer -1)
    print(f"{beer} bottles of beer on the wall, {beer} bottles of beer. \n" + 
          f"Take one down and pass it around, {beer -1} {bottle_output} of beer on the wall.")