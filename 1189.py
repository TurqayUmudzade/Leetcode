
items_list = []
view_index = -1


# Insert items to the list
def insert_item(item_name, price):
    global items_list
    items_list.append([item_name, int(price)])


# View the cheapest item
def view_item():
    global items_list, view_index
    items_list = sorted(items_list, key=lambda x: (x[1], x[0]))
    if view_index < len(items_list):
        item, price = items_list[view_index + 1][0], items_list[view_index + 1][1]
        view_index += 1



def getItems(entries):
    for i in range(entries):
        entry, item, price = input().split()
        if entry == 'INSERT':
            insert_item(item, price)
        if entry == 'VIEW':
            view_item()