

class User:
#--------------------static variables-------------------------------------------------
    post_number = 1
    posts = {} #key: (post_number) value: (user's post from )
    
    def __init__(self, name: str, email: str, drivers_liscence: str) -> object:
        self._name = name.lower()
        self._email = email.lower()
        self._drivers_liscence = drivers_liscence
        self._user_posts = {} #key (title) value: (post)
        self._user_key = 1
    
#--------------------getters and setters for private variables------------------------
#--------------------name------------------------------------------------------------
    @property
    def name(self) -> str:
        return self._name.capitalize()
    @name.setter
    def name(self, updated_name: str) -> None:
        if isinstance(updated_name, str) and len(updated_name) >= 3:
            self._name = updated_name
            
            
#--------------------email-------------------------------------------------------------      
    @property
    def email(self) -> str:
        return self._email.lower()
    @email.setter
    def email(self, updated_email: str) -> None:
        if isinstance(updated_email, str) and "@" in updated_email:
            self._email = updated_email
            
            
#--------------------drivers liscence-------------------------------------------------
    @property
    def drivers_liscence(self) -> str:
        return self._drivers_liscence.upper()
    @drivers_liscence.setter
    def drivers_liscence(self, updated_drivers_liscence: str) -> None:
        if isinstance(updated_drivers_liscence, str):
            self._drivers_liscence = updated_drivers_liscence
            
            
#--------------------current user's posts ----------------------------------------------
    @property
    def user_posts(self) -> dict:
        return self._user_posts


#--------------------methods-----------------------------------------------------------
    def create_a_post(self) -> int:
        title = input("What would you like to title your post? ")
        post = input("Enter your post here: ")
        self._user_posts.update({self._user_key: [title, post]})
        User.posts[User.post_number] = self._user_posts
        User.post_number += 1
        self._user_key += 1
        
        
    def see_my_posts(self) -> None:
        for key, value in self._user_posts.items():
            print(f"{key}, {value}")
        
        
    def see_all_posts(self) -> None:
        for key, value in User.posts.items():
            print(f"{key}, {value}")
    
    
    def delete_a_post(self,key: int =1) -> None:
        del User.posts[key]
        last_key = list(self._user_posts.keys())[-1]
        del self._user_posts[last_key]
        
        
#-----------------for testing purposes-------------------
# print(len(User.posts))
# user = User("John", "john@email.com", "FDUI87")
# user.create_a_post()
# print(User.posts)
# user.delete_a_post()
# print(len(User.posts))