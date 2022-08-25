import { Todo, TodoModel } from './todo.model';
import { nanoid } from 'nanoid';
import { createTodoBody } from './todo.schema';
//todo input any
export async function createTodo(input: createTodoBody): Promise<Todo> {
  const shortId = `todo_${nanoid()}`;

  return TodoModel.create({
    shortId,
    ...input,
  });
}
