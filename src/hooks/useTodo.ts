import { useState, type FormEvent } from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Active'>('All');

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get('todo') as string;

    if (!todoItem.trim()) return;

    setTodoList([
      ...todoList,
      { id: Date.now(), text: todoItem, completed: false },
    ]);

    event.currentTarget.reset();
  };

  const toggleTodoCompleted = (id: number) => {
    console.log(id);
    const newTodoList = todoList.map((todo) => {
      const completed = !todo.completed;
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const filteredTodo = todoList.filter((todo) => {
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Active') return !todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodoList((prev) => prev.filter((todo) => !todo.completed));
  };

  const removeTodo = (id:number) => {

    const newList = todoList.filter((todo) => todo.id !== id)
    
    setTodoList(newList)
  }

  return {
    addTodo,
    clearCompleted,
    filteredTodo,
    setFilter,
    filter,
    toggleTodoCompleted,
    removeTodo
  };
};
