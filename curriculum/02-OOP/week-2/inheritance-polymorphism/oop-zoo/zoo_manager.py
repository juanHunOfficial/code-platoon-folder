class Animal:
    def __init__(self, name: str, species: str) -> object:
        self.name = name
        self.species = species
        
    def speak(self) -> str:
        return f"Animal sound"
    
class Mammal(Animal):
    def __init__(self, name, species) -> object:
        super().__init__(name, species)
        
    def give_birth(self) -> str:
        return f"{self.name} the {self.species} has given birth"
    
class Bird(Animal):
    def __init__(self, name, species, wingspan) -> object:
        super().__init__(name, species)
        self.wingspan = wingspan
        
    def wingspan(self) -> int:
        return self.wingspan
    
class Reptile(Animal):
    def __init__(self, name, species) -> object:
        super().__init__(name, species)
    
    def bask_in_sun(self) -> str:
        return f"{self.name} the {self.species} is basking in the sun"
    
class Primate(Mammal):
    def __init__(self, name, species) -> object:
        super().__init__(name, species)
        
    def climb_trees(self) -> str:
        return f"{self.name} the {self.species} is climbing trees"
    
class Marsupial(Mammal):
    def __init__(self, name, species) -> object:
        super().__init__(name, species)
    
    def carry_baby(self) -> str:
        return f"{self.name} the {self.species} is carrying its baby"
    
class Aviary:
    birds = []
    
class ReptileEnclosure:
    reptiles = []