import { render, screen } from "@testing-library/react";
import TodoForm from ".";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe('TodoForm', () => {
  const addTodoMock = vi.fn()
  
  it('Testa se o input para adicionar as tarefas está na tela', async () => {
    render(<TodoForm addTodo={addTodoMock} />)

    const input = screen.getByPlaceholderText('Create a new todo...')
      

      expect(input).toBeInTheDocument()
  });

  it('Testa se da para digitar no input e adicionar a tarefa', async () => {
    const user = userEvent.setup()
    render(<TodoForm addTodo={addTodoMock} />)

    const input = screen.getByPlaceholderText('Create a new todo...')
    await user.type(input, 'Nova tarefa')
    await user.keyboard('{Enter}')

    expect(input).toHaveValue('Nova tarefa')
    expect(addTodoMock).toHaveBeenCalledTimes(1)


  })
});
