class CarManager:
    
    all_cars = []
    total_cars = 0
    
    def __init__(self, id: int, make: str, model: str, year: int, mileage: int, services: list) -> object:
        self._id = id
        self._make = make
        self._model = model
        self._year = year
        self._mileage = mileage
        self._services = services
        
        CarManager.total_cars += 1
        CarManager.all_cars.append(self)

    @property    
    def mileage(self) -> int:
        return self._mileage
    
    @mileage.setter
    def mileage(self, updated_mileage: int) -> None:
        if isinstance(updated_mileage, int) and (updated_mileage > self._mileage):
            self._mileage = updated_mileage
        
    def print_car_details(self) -> None:
        print(f"For car ID #:{self._id}, it is a {self._year} {self._make} {self._model} with {self._mileage} miles.")
        print(f"The services that have been preformed so far are: {self._services}")
        
    
    def service_car(self, service_to_add: str) -> None:
        self._services.append(service_to_add)
        
taco = CarManager(1110, "Toyota", "Tacoma", 2011, 86700, ["Oil change", "Rotated Tires", "Windshield replacement"])
si = CarManager(1111, "Honda", "Civic Si", 2011, 130020, ["Oil change", "Rotated Tires"])
highlander = CarManager(1112, "Toyota", "Highlander", 2018, 101002, ["Oil change", "Rotated Tires", 
                                                                     "Windshield replacement", "Car wash"])

print(CarManager.all_cars)
print(CarManager.total_cars)

print(si.print_car_details())
si.service_car("Totaled car, and replacement")
si.print_car_details()

print()

taco.print_car_details()
taco.mileage = int(input("Enter the new mileage for your vehicle: "))
taco.print_car_details()