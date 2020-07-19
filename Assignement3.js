/*
 3. Assignement 
 grocery shopping

 */

var shoppingList = [];

function add_item(item){
    shoppingList.push(item);
}

function remove_item(item){
    for (var i = 0; i <= shoppingList.length; i++){
        if (shoppingList[i] === item) shoppingList.splice(i, 1);
    }
}

function view_list(){
    for (var i = 0; i < shoppingList.length; i++){
        if (shoppingList.length == 0)
        return;
        else
        console.log("- " + shoppingList[i]);
    }
}

function mark_item(item){
    for (var i = 0; i <= shoppingList.length; i++){
        if (shoppingList[i] == item) console.log("X " + shoppingList[i]);
    }
}

view_list();
add_item('banana');
add_item('apple');
view_list();
add_item('testies');
view_list();
remove_item('testies');
view_list();
mark_item('apple');


