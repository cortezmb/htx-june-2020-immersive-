
#1. Create a dictionary called zodiac with the following inforation.  
# Each key is the name of the zodiac


<<<<<<< HEAD
zodiac = {"Aries": "The Warrior",
          "Taurus": "The Builder",
          "Gemini": "The Messenger", 
          "Cancer": "The Mother", 
          "Leo": "The King", 
          "Virgo": "The Analyst",  
          "Libra": "The Judge", 
          "Scorpio": "The Magician", 
          "Sagittarius": "the Gypsy", 
          "Capricorn": "the Father", 
          "Aquarius": "The Thinker",  
          "Pisces": "TheMystic"} 
# result = zodiac["Sagittarius"]
# print(result)

# allkeys = zodiac.keys()
# # print(allkeys)

# #to put all keys in one line instead of a list
# # for val in allkeys:
# #     print(val)

# allvalues = zodiac.values()
# # to put all values in a list
# for val in allvalues:
#     print(val)

# items = zodiac.items()
# print(items)

#name variable for key and values. this will return a list of tuples. This will loop through. 
for key, value in zodiac.items():
    print(f"{key}  {value}")

# #1a. Retrieve information about your zodiac from the zodiac dictionary

# isItThere = "Sag" in zodiac

# if "Sag" in zodiac
#   print(zodiac["Sag"])
# else:
#   print("key not found")
# #2. Given the following dictionary

# phonebook_dict = {
#   'Alice': '703-493-1834',
#   'Bob': '857-384-1234',
#   'Elizabeth': '484-584-2923'
# }

# # 2a. Print Elizabeth's phone number
# print(phonebook_dict['Elizabeth'])
# # 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# phonebook_dict['Kareem'] = "938-489-1234"
# # 2c. Delete Alice's phone entry.
# del phonebook_dict['Alice']
# # # 2d. Change Bob's phone number to '968-345-2345'.
# phone_dict['Bob'] = '968-345-2345'
# # # 2e. Print all the phone entries.
# print(phone_dict)
# Will print out a list with key and values
# for key, value in phonebook_dict.items():
#     print(f"{key}  {value}")
=======
# Aries - The Warrior 
# Taurus - The Builder 
# Gemini - The Messenger 
# Cancer - The Mother 
# Leo - The King 
# Virgo -The Analyst 
# Libra - The Judge 
# Scorpio - The Magician 
# Sagittarius - the Gypsy 
# Capricorn - the Father 
# Aquarius - The Thinker 
# Pisces - TheMystic 

zodiac["Virgo"]

#1a. Retrieve information about your zodiac from the zodiac dictionary

#2. Given the following dictionary

phonebook_dict = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
}


phonebook_dict["Kareem"] = "938-489-1234"
# 2a. Print Elizabeth's phone number
# 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# 2c. Delete Alice's phone entry.
# 2d. Change Bob's phone number to '968-345-2345'.
# 2e. Print all the phone entries.


>>>>>>> 7f141750c080db09f60ab01bff0c5471a5c063ce
# 3. Nested dictionaries


# ramit = {
#   'name': 'Ramit',
#   'email': 'ramit@gmail.com',
#   'interests': ['movies', 'tennis'],
#   'friends': [
#      {
#        'name': 'Jasmine',
#        'email': 'jasmine@yahoo.com',
#        'interests': ['photography', 'tennis']
#      },
#      {
#         'name': 'Jan',
#         'email': 'jan@hotmail.com',
#         'interests': ['movies', 'tv']
#      }
#     ]
# }
#3a. Write a python expression that gets the email address of Ramit.
# result = ramit.get('email')
# print(result)
#3b. Write a python expression that gets the first of Ramit's interests.
# result = ramit['interests'][0]
# print(result)
#3c. Write a python expression that gets the email address of Jasmine.
# result = ramit['friends'][0]['email']
# print(result)
#3d. Write a python expression that gets the second of Jan's two interests.



# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input, 
# and returns a dictionary containing the tally of how many times 
# each letter in the alphabet was used in the word. For example:

# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}


# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

# >>> word_histogram('To be or not to 

# File I/O
# name a variable create a file, open a file and give write access
# file_handler = open("hello.txt", "w")

# file_handler.write('''
# wehrdnfagnakldnkafklan
# aslfnasdlkfansdflasfa
# naldfknalfasfnasdfl ''')

# file_handler.close()

# to create a variable, create a file, give read access
# file_handler = open('sample.html', 'r')

# contents = file_handler.read()

# file_handler.close()

# print(contents)

# to create a variable, append to a file, give read access
# file_handler = open('sample.html', 'a')

# contents = file_handler.append()

# file_handler.close()

# print(contents)

# Lets create a new file
