import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from ".";
import { vi } from "vitest";
import { useState } from "react";

describe('TodoList', () => {
  const todoListMock = [
    { id: 1, text: 'Texto 1', completed: true },
    { id: 2, text: 'Texto 2', completed: false },
  ];

  let toggleTodoCompletedMock: ReturnType<typeof vi.fn>;
  let setFilterMock: ReturnType<typeof vi.fn>;
  let clearCompletedMock: ReturnType<typeof vi.fn>;
  let removeTodoMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    toggleTodoCompletedMock = vi.fn();
    setFilterMock = vi.fn();
    clearCompletedMock = vi.fn();
    removeTodoMock = vi.fn();
  });

  it('Mostra todos os todos passados', () => {
    render(
      <TodoList
        TodoList={todoListMock}
        toggleTodoCompleted={toggleTodoCompletedMock}
        setFilter={setFilterMock}
        filter="All"
        clearCompleted={clearCompletedMock}
        removeTodo={removeTodoMock}
      />
    );

    todoListMock.forEach(todo => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  it('Chama toggleTodoCompleted ao clicar no botão do todo', async () => {
    render(
      <TodoList
        TodoList={todoListMock}
        toggleTodoCompleted={toggleTodoCompletedMock}
        setFilter={setFilterMock}
        filter="All"
        clearCompleted={clearCompletedMock}
        removeTodo={removeTodoMock}
      />
    );

    const buttons = screen.getAllByRole('button');
    await userEvent.click(buttons[0]); // primeiro botão do todo
    expect(toggleTodoCompletedMock).toHaveBeenCalledWith(1);
  });

  it('Chama removeTodo ao clicar no botão de remover', async () => {
    render(
      <TodoList
        TodoList={todoListMock}
        toggleTodoCompleted={toggleTodoCompletedMock}
        setFilter={setFilterMock}
        filter="All"
        clearCompleted={clearCompletedMock}
        removeTodo={removeTodoMock}
      />
    );

    const removeButtons = screen.getAllByRole('button', { name: /icon cross/i });
    await userEvent.click(removeButtons[0]);
    expect(removeTodoMock).toHaveBeenCalledWith(1);
  });

  it('Chama setFilter ao clicar nos filtros', async () => {
    render(
      <TodoList
        TodoList={todoListMock}
        toggleTodoCompleted={toggleTodoCompletedMock}
        setFilter={setFilterMock}
        filter="All"
        clearCompleted={clearCompletedMock}
        removeTodo={removeTodoMock}
      />
    );

    const activeButtons = screen.getAllByText('Active');
    await userEvent.click(activeButtons[0]); 
    expect(setFilterMock).toHaveBeenCalledWith('Active');

    const completedButtons = screen.getAllByText('Completed')
    await userEvent.click(completedButtons[0]);
    expect(setFilterMock).toHaveBeenCalledWith('Completed');
  });

  it('Chama clearCompleted ao clicar no botão', async () => {
    render(
      <TodoList
        TodoList={todoListMock}
        toggleTodoCompleted={toggleTodoCompletedMock}
        setFilter={setFilterMock}
        filter="All"
        clearCompleted={clearCompletedMock}
        removeTodo={removeTodoMock}
      />
    );

    const clearButton = screen.getByText(/Clear Completed/i);
    await userEvent.click(clearButton);
    expect(clearCompletedMock).toHaveBeenCalled();
  });

  it('Aplica a cor azul ao filtro ativo', async () => {
  const Wrapper = () => {
    const [filter, setFilter] = useState<'All'|'Active'|'Completed'>('All');
    return (
      <TodoList
        TodoList={todoListMock}
        toggleTodoCompleted={toggleTodoCompletedMock}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompletedMock}
        removeTodo={removeTodoMock}
      />
    );
  };

  render(<Wrapper />);

  const activeButtons = screen.getAllByText('Active');
  const activeButton = activeButtons[0]
  await userEvent.click(activeButton);

  expect(activeButton).toHaveClass('text-blue-500');

  const completedButtons = screen.getAllByText('Completed')
  const completedButton = completedButtons[0]
  await userEvent.click(completedButton)

  expect(completedButton).toHaveClass('text-blue-500')


  const allButtons = screen.getAllByText('All')
  const allButton = allButtons[0]
  await userEvent.click(allButton)

  expect(allButton).toHaveClass('text-blue-500')
 });


 it('Testa os filtros para telas menores', async () => {
  const Wrapper = () => {
    const [filter, setFilter] = useState<'All'|'Active'|'Completed'>('All');
    return (
      <TodoList
        TodoList={todoListMock}
        toggleTodoCompleted={toggleTodoCompletedMock}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompletedMock}
        removeTodo={removeTodoMock}
      />
    );
  };

  render(<Wrapper />);

  const activeButtons = screen.getAllByText('Active');
  const activeButton = activeButtons[1]
  await userEvent.click(activeButton);

  expect(activeButton).toHaveClass('text-blue-500');

  const completedButtons = screen.getAllByText('Completed')
  const completedButton = completedButtons[1]
  await userEvent.click(completedButton)

  expect(completedButton).toHaveClass('text-blue-500')


  const allButtons = screen.getAllByText('All')
  const allButton = allButtons[1]
  await userEvent.click(allButton)

  expect(allButton).toHaveClass('text-blue-500')

 })
});
