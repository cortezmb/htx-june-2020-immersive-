# class exercises

#pickle
import pickle

# data = {'name': 'Paul'}

# # using 'with' closes the file after it runs. 
# # using 'as' names a variable
# # this logic is used at end when user is ready to quit
# with open('data.pickle', 'wb') as fh:
#     #this will dump data in binary from data file
#     pickle.dump(data, fh)

phonebook_dict = {'Alice': '703-493-1834',
'Bob': '857-384-1234',
'Elizabeth': '484-584-2923'}

# you need to load data into dictionary before asking what user wants to do
with open('phonebook.pickle', 'wb') as fh:
    #creating a new variable in the file
    pickle.dump(phonebook_dict, fh)
    #you can access keys and values in the this dictionary
    # print(data["name"])