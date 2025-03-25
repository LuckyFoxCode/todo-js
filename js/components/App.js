export function App() {
  const todos = [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
  ];

  function render() {
    const root = document.querySelector("#app");
    root.innerHTML = "";

    function container() {
      const container = document.createElement("div");
      container.classList.add("container");

      container.appendChild(todoForm(todos));

      return container;
    }

    function todoForm(todos) {
      const todoForm = document.createElement("form");
      todoForm.classList.add("todo-form");

      const input = document.createElement("input");
      input.classList.add("todo-form-input");
      input.type = "text";
      input.placeholder = "Add a new task";
      todoForm.appendChild(input);

      const button = document.createElement("button");
      button.classList.add("todo-form-button");
      button.type = "submit";
      button.textContent = "Add task";
      todoForm.appendChild(button);

      const handleSubmit = (e) => {
        e.preventDefault();

        const value = input.value.trim();

        if (value === "") return;
        if (value.length > 100) return;

        if (todos.some((todo) => todo.text === value)) {
          console.log("Task already exists");
          return;
        }

        const newTodo = {
          id: crypto.randomUUID(),
          text: value,
          completed: false,
        };

        input.value = "";
        todos.push(newTodo);
        render();
      };

      todoForm.addEventListener("submit", handleSubmit);

      return todoForm;
    }

    root.appendChild(container());
  }

  render();
}
