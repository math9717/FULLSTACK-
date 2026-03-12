/**
 * Question 1
 */
const question1 = () => {
  // Select the elements by their IDs
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  sidebarButton.addEventListener("click", (event) => {
    // Check if the sidebar currently has the "opened" class
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebar: remove the class and reset the button text
      sidebar.classList.remove("opened");
      sidebarButton.textContent = "›"; // Or your original button text
    } else {
      // Open the sidebar: add the class and change the button text
      sidebar.classList.add("opened");
      sidebarButton.textContent = "‹"; 
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  addTodoButton.addEventListener("click", () => {
    const todoValue = taskName.value;

    // Check if input is not empty
    if (todoValue.trim() !== "") {
      // 1. Create a new <li> element
      const newTodo = document.createElement("li");
      
      // 2. Set the text (using textContent for security!)
      newTodo.textContent = todoValue;
      
      // 3. Append it to the <ul>
      todoListUl.append(newTodo);
      
      // 4. Clear the input field
      taskName.value = "";
    }
  });
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  const updateMessage = () => {
    const first = firstNameInput.value;
    const last = lastNameInput.value;
    
    // Update the message text using a template string
    message.textContent = `Hello ${first} ${last}!`;
  };

  // Listen for typing in both fields
  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);
};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
