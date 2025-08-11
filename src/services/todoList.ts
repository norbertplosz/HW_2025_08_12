import { TodoItem } from "../models/todoItem";
import { LogAddition } from "../decorators/logAddition";

export class TodoList<T> {
  private items: Map<number, TodoItem<T>> = new Map();

  @LogAddition
  addItem(item: TodoItem<T>): void {
    this.items.set(item.id, item);
  }

  deleteItem(id: number): boolean {
    return this.items.delete(id);
  }

  listItems(): TodoItem<T>[] {
    return Array.from(this.items.values());
  }

  filterByCategory(category: string): TodoItem<T>[] {
    return this.listItems().filter(item => item.category === category);
  }
}
