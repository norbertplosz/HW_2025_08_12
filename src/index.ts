import { TodoList } from "./services/todoList";
import { TodoItem } from "./models/todoItem";
import { TodoContent, isTextTodo, isDatedTodo } from "./utils/typeGuards";

const todoList = new TodoList<TodoContent>();

todoList.addItem(new TodoItem(1, "Tej", "bevásárlás"));

todoList.addItem(
  new TodoItem(2, { message: "HF készítése", dueDate: new Date("2025-08-12") }, "tanulás")
);

for (const item of todoList.listItems()) {
  if (isTextTodo(item.content)) {
    console.log(`Szöveges feladat: ${item.content}`);
  } else if (isDatedTodo(item.content)) {
    console.log(`Határidős feladat: ${item.content.message}, határidő: ${item.content.dueDate}`);
  }
}

console.log("Tanulás kategória:", todoList.filterByCategory("tanulás"));
