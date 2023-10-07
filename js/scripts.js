function newItem(){

    //javascript
    //1. Adding a new item to the list of items: 
       let li = $("<li></li>");
       let inputValue = $("#input").val();
       li.append(inputValue);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         $('#list').append(li);
       }
    
     //2. crossout list item:
       function crossOut() {
             li.toggleClass("strike");
         }
    
         li.on("dblclick", function crossOut() {li.toggleClass("strike")});
    
     //3 Adding the delete button "X": 
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
     //3 adding class delete (display: none) in css:
     crossOutButton.on("click", deleteListItem);
     function deleteListItem(){
           li.addClass("delete")
       }
     // 4. Reordering the items: 
       $('#list').sortable();
    
    }