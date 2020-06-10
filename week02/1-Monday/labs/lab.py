

# 1. Create an empty class called "Student"

# class Student:
#     def greeting(self):
#         return "hello"

# #2. Create 5 students objects (instances of the class "Student") of "Student" types

# joe = Student()
# print(joe.greeting())
# micah = Student()
# print(micah.greeting())
# chris = Student()
# print(chris.greeting())
# rj = Student()
# print(rj.greeting())
# jackie = Student()
# print(jackie.greeting())

#3a. Create a "greeting" method inside of the class "Student" class that 
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}" 
# class Student:

#     def greeting(self, name):
#         return f"hello {name}"

# joe = Student()
# print(joe.greeting("Joe"))

# micah = Student()
# print(micah.greeting("micah"))

# chris = Student()
# print(chris.greeting("chris"))

# rj = Student()
# print(rj.greeting("RJ"))

# jackie = Student()
# print(jackie.greeting("jackie"))


#4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.

#5a. Create a constructor for the Student class. 
# class Person:
# #Created a constructor
#     def __init__(self, fName, lName, birthdate, address, phone, email):
#         #Created an instance variable
#         self.fName = fName
#         self.lName = lName
#         self.birthdate = birthdate
#         self.address = address
#         self.phone = phone
#         self.email = email

#     def greet(self, fName, lName, birthdate, address, phone, email):
#         return f"Hello {fName}"
# michael = Person("Michael", "Cortez", "1/1/2020", "7406 Fall Springs Ln", "7139040992", "michael@gmail.com")

# print(michael.fName)

# woody = Person("Woody", "Connell", "2/2/2020", "1234 Sesame St", "2142343434", "woody@gmail.com")

# print(woody.lName)


#5b. Create a print statement inside of the constructor
#5c. Run your lab.py again and you should see a print statement for each student object 
# That you created 

# class Person:
# #Created a constructor
#     def __init__(self, fName, lName, birthdate, address, phone, email):
#         #Created an instance variable
#         self.fName = fName
#         self.lName = lName
#         self.birthdate = birthdate
#         self.address = address
#         self.phone = phone
#         self.email = email
#     #Create an instance method    
#     def printName(self):

#         print(f"Hello {self.fName} {self.lName} today, {self.birthdate}, is your birthday! Please verify your street address of {self.address}")

# michael = Person("Michael", "Cortez", "1/1/2020", "7406 Fall Springs Ln", "7139040992", "michael@gmail.com")

# michael.printName()

# woody = Person("Woody", "Connell", "2/2/2020", "1234 Sesame St", "2142343434", "woody@gmail.com")

# woody.printName()

#6a. Pass in "name" as a parameter to your Student constructor. 

#6b. Create an instance variable for name
#6c. Refactor your greeting method by removing the name parameter and 
# adding a "self" in front of the printed "name" variable in the return statement 
#6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated 

#7. Class Methods
#7a. Create a "Class" method inside of the "Student" called "campus" that returns the 
# Statement "Digital Crafts - Houston"
# Campus is a "Class" method so it should not have "self" as an argument. 


#7b. call the campus method by invoking Student.campus()
#7c. Call the campus method on each of the student objects 
#7d. Return the name of the student in the campus method (instance variable) (you should
# get an error)

#8. Class Variables 
#8a. Create a class variable inside of the Student class called "cohort" whose value is
# "June 2020 Cohort"
#8b. Print to the console each class variable for each of the student objects, i.e. 
# Michah.cohort 
#8c. Refactor your class method to print out the class variable when it is called 
#8d. Call the class method on the class (i.e. Student.campus())
#8e. Call the class method on each object (i.e. Dan.campus())

#9. Accessor Modifiers 
# Refactor your constructor to take a parameter for studentID
#9a. Create a new instance variable for studentID with the value _studentID
# Refactor the student objects to pass a studentID argument
#9b. Print the studentID value to the console
# Change the value of studentID to __studentID 
# Print the value to the console (you should get an error)


#. Inheritance 

# Create a new class called Car with the following method :
# class Car():

# # CarDetails which prints "Here are details of this car"
#     def CarDetails():
#         print("Here are details of this car")

# # Create a new class called Hybrid that inherits from the Car class
# #  with the following method: CarType which prints "I am a hybrid car" 
# class Hybrid(Car):
#     def CarType():
#     print("I am a hybrid car")


# # Create a new class called Electric that inherits from the Car class
# #  with the following  method: CarType which prints "I am a hybrid car" 
# class Electric(Car):
#     def CarType():
#         print("I am a elecric car")
# # Create a Hybrid instance and an Electric instance
# Hybrid.CarType()
# Electric.Cartype() 
# # Call the method CarType on the Hybrid Instance and Electric Instance
# CarType.Hybrid()
# CarType.Electric()
# # Call the method Car Details on each instance
# CarDetails.Hybrid()
# CarDetails.Electric()


# Add the following instance variables to the Car class :
# - make 
# - model 
# - color








# Implicit Inheritance 

#. Override Explicitly

# Alter Before or After

# Super()

# COMPOSITION


# Objects 102 Class exercise Slide 29/53

# class Person: 
#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
#     def greet(self, other_person):
#         print('Hello {}, I am {}!'.format(other_person.name, self.name))

# #Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
# sonny = Person("sonny","sonny@hotmail.com", "483-485-4948")  
# jordan = Person("jordan","jordany@aol.com", "495-586-3456")  

# #Have sonny greet jordan using the greet method. 
# sonny.greet(jordan)
# jordan.greet(sonny)

# #Write a print statement to print the contact info (email and phone) of Sonny.
# print(f"{sonny.email} {sonny.phone}")
# print(f"{jordan.email} {jordan.phone}")

# Objects 102 Class exercise Slide 41/53

class Person: 
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = list()
    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
    def print_contact_info(self):
        print(f"{self.name}'s email: {self.email}, {self.name}'s phone number: {self.phone}")
    def add_friend(self, name):
        self.friends.append(name)
    def num_friends(self):
        return len(jordan.friends)
    

#Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
sonny = Person("sonny","sonny@hotmail.com", "483-485-4948")  
jordan = Person("jordan","jordan@aol.com", "495-586-3456")  


#Have sonny greet jordan using the greet method. 
sonny.greet(jordan)
jordan.greet(sonny)
jordan.friends.append("sonny")
sonny.friends.append("jordan")
jordan.num_friends()
len(jordan.friends)
# sonny.greeting.count 

#Write a print statement to print the contact info (email and phone) of Sonny.
print(f"{sonny.email} {sonny.phone}")
print(f"{jordan.email} {jordan.phone}")
print(f"{jordan.friends}")
print(f"{sonny.friends}")
print(len(jordan.friends))
print(jordan.num_friends())





