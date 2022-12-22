"use strict";
const input = document.querySelector("input");
const addNewItem = document.querySelector(".addNewItem");
const items = document.querySelector(".items");

// Add item with button click
addNewItem.addEventListener("click", function () {
  // Make sure the input box stays selected
  input.focus();

  // Get value of input
  const value = input.value;

  // Create a new container
  const container = document.createElement("div");
  // Create a new label
  const label = document.createElement("label");
  // Create a new checkbox
  const checkbox = document.createElement("input");
  checkbox.className = "done";
  checkbox.type = "checkbox";
  // Create a delete button
  const trash = document.createElement("button");
  trash.className = "remove";

  // Set the content of the list item
  label.textContent = value;

  // Append the checkbox, label and delete button
  items.appendChild(container);
  container.appendChild(trash);
  container.appendChild(checkbox);
  container.appendChild(label);

  // Clear the input field
  input.value = "";

  // Deleting items
  items.addEventListener("click", function (event) {
    if (event.target.className === "remove") {
      const container = event.target.parentNode;
      const parent = container.parentNode;
      parent.removeChild(container);
    }
  });
});

// Add item when Enter Key pressed
input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    // Make sure the input box stays selected
    input.focus();

    // Get value of input
    const value = input.value;

    // Create a new container
    const container = document.createElement("div");
    // Create a new label
    const label = document.createElement("label");
    // Create a new checkbox
    const checkbox = document.createElement("input");
    checkbox.className = "done";
    checkbox.type = "checkbox";
    // Create a delete button
    const trash = document.createElement("button");
    trash.className = "remove";

    // Set the content of the list item
    label.textContent = value;

    // Append the checkbox, label and delete button
    items.appendChild(container);
    container.appendChild(trash);
    container.appendChild(checkbox);
    container.appendChild(label);

    // Clear the input field
    input.value = "";

    // Deleting items
    items.addEventListener("click", function (event) {
      if (event.target.className === "remove") {
        const container = event.target.parentNode;
        const parent = container.parentNode;
        parent.removeChild(container);
      }
    });
  }
});
