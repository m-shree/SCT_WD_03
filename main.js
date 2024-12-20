// Function called while clicking the add button
function add_item() {
  // Getting input box and list by selecting their IDs
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");

  if (item.value.trim() !== "") {
    // Creating an element and adding value to it
    let make_li = document.createElement("LI");
    make_li.appendChild(document.createTextNode(item.value.trim()));

    // Adding the list item (li) to the unordered list (ul)
    list_item.appendChild(make_li);

    // Reset the value of the input box
    item.value = "";

    // Delete a list item on click
    make_li.onclick = function () {
      this.parentNode.removeChild(this);
    };
  } else {
    // Alert message when the input box is empty
    alert("Please add a value to the item.");
  }
}
