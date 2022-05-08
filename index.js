const items = ["Candles", "Decorations", "Chocolate"];
const itemslist = document.getElementById("itemslist");

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

function loopitems(){
for (let index = 0; index < items.length; index++) {
    let rownumber = index;
    rownumber++;
    itemslist.innerHTML += '<div>' + rownumber + ': <input type="checkbox" id="item' + index + '" name="item' + index + '" value="item' + index + '"><label for="item' + index + '">' + items[index]; + '</label><br></div>';
    document.getElementById("itemadd").value = "";
}
}
loopitems();

// - Add an input which allows the user to add more items.

const addbtn = document.getElementById("addbtn")

addbtn.addEventListener("click", function(){
   const value = document.getElementById("itemadd").value;
   if (value !== "") {
      items.push(value);
      itemslist.innerText = "";
      loopitems();
   }
});

// - Add a delete button for the items.

const remove = document.getElementById("deletebtn");

remove.addEventListener("click", function(){
   for (let index = 0; index < items.length; index++) {
       const checkbox = document.getElementById("item" + index)
        if (checkbox.checked == true && checkbox.value == "item" + index){
            items.splice(index, 1);
        }
   }
   itemslist.innerText = "";
    loopitems();
});

// Start and deactivate Snow

const snowbtn = document.getElementById("snowbtn");
const disablesnow = document.getElementById("disablesnowbtn");
const snow = document.getElementById("snoweffect");

snowbtn.addEventListener("click", function(){
   snow.classList.remove("hidden");
});

disablesnow.addEventListener("click", function(){
   snow.classList.add("hidden");
});