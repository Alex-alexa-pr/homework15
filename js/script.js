"use strict";
//1
let listNode = document.getElementById("albums");

function addItem(item) {
  let listItemNode = document.createElement('li');
  listItemNode.classList.add("album_title");
  listItemNode.innerHTML = item.title;
  listNode.append(listItemNode);
}

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((result) => result.forEach((item) => addItem(item)))
  .catch((error) => console.error(error));