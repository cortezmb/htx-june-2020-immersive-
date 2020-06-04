#Todo List Exercise
todos = ["exercise", "go to work", "do laundry", "buy groceries"]

addedItem = input("What items do you want to add? ")

count = 0

while len(addedItem) > 0:
    todos.append(addedItem)
    print(todos)
    addedItem = input("What else do you want to add: ")

    if len(addedItem) == 0:
        break
     
print(todos)



