import random
import string

class BoggleBoard:
  
  def __init__(self):
    for line in range(4):
      print("----")
    print()

  def shake(self):
    
    for line in range(4):
      random_line = "".join(random.choices(string.ascii_uppercase, k=4))
      print(random_line)

boggle = BoggleBoard()
boggle.shake()

