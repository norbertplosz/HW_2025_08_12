export type TextTodo = string;
export type DatedTodo = { message: string; dueDate: Date };
export type TodoContent = TextTodo | DatedTodo;

export function isTextTodo(content: TodoContent): content is TextTodo {
  return typeof content === "string";
}

export function isDatedTodo(content: TodoContent): content is DatedTodo {
  return typeof content === "object" && content !== null && 'dueDate' in content;
}
