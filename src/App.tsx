import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/todoList';
import { useTodo } from './hooks/useTodo';


function App() {
  const {
    addTodo,
    filteredTodo,
    toggleTodoCompleted,
    setFilter,
    filter,
    clearCompleted,
    removeTodo
  } = useTodo()

  return (
    <TodoContainer>
      <TodoHeader />
      <TodoForm addTodo={addTodo} />
      <TodoList
        TodoList={filteredTodo}
        toggleTodoCompleted={toggleTodoCompleted}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
        removeTodo={removeTodo}
      />
    </TodoContainer>
  );
}

export default App;
