class ContactList:

#--------------------initializing-------------------------
    def __init__(self, name_of_list: str, list_of_contacts: list =[]) -> object:
        self._name_of_list = name_of_list
        self._list_of_contacts = list_of_contacts

#--------------------getters and setters------------------

    @property
    def name(self) -> str:
        return self._name_of_list
    @name.setter
    def name(self, new_name: str) -> None:
        if isinstance(new_name, str):
            self._name_of_list = new_name
            
    @property
    def contacts(self) -> list:
        return self._list_of_contacts
    @contacts.setter
    def contacts(self, new_contacts) -> None:
        if isinstance(new_contacts, list):
            self._list_of_contacts = new_contacts
    
#--------------------instance methods----------------------
    def add_contact(self, contact_to_add: dict) -> None:
        if contact_to_add not in self._list_of_contacts:
            self._list_of_contacts.append(contact_to_add)
    
    
    def remove_contact(self, name_for_key: str) -> None:
        index = 0
        for contact in self._list_of_contacts:
            if contact["name"] == name_for_key:
                del self._list_of_contacts[index]
            index += 1
    

    def find_shared_contacts(self, list_to_check: list) -> list:
        list_of_matches = []
        for contact in list_to_check.contacts:
            if contact in self._list_of_contacts:
                list_of_matches.append(contact)
        return list_of_matches
    

#--------------------for testing purposes only---------------
# contacts = [{'name': 'Alice', 'number': '123-4567'}]
# my_list = ContactList('My List', contacts)

# print(my_list._name_of_list)
# print(my_list._list_of_contacts)
# my_list.add_contact({'name': 'Bob', 'number': '987-6543'})
# # print(my_list.contacts[0]['name'])
# # print()
# # print(my_list._name_of_list)
# # print(my_list._list_of_contacts)
# # print(my_list.contacts[1]['name'])
# my_list.remove_contact('Alice')
# print(my_list._list_of_contacts)

# friends = [{'name': 'Alice', 'number': '867-5309'}, {'name': 'Bob', 'number': '555-5555'}]
# work_buddies = [{'name': 'Alice', 'number': '867-5309'}, {'name': 'Carlos', 'number': '555-5555'}]
# my_friends_list = ContactList('My Friends', friends)
# my_work_buddies = ContactList('Work Buddies', work_buddies)
# shared_contacts = my_friends_list.find_shared_contacts(my_work_buddies)