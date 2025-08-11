export class TodoItem<T> {
  constructor(
    public id: number,
    public content: T,
    public category?: string
  ) {}
}
