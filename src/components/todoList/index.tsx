import { themeConfig } from '../../contexts/theme';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';
import type { Todo } from '../../App';
import IconCheck from '../../../public/images/icon-check.svg';

interface TodoListProps {
  TodoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
  setFilter: (filter: 'All' | 'Completed' | 'Active') => void;
}

export default function TodoList({
  TodoList,
  toggleTodoCompleted,
  setFilter,
}: TodoListProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`${themeConfig[theme].todo.backgroundColor} w-full rounded-md`}
      >
        <ul>
          {TodoList.length > 0 &&
            TodoList.map((todo) => (
              <li
                className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}
                key={todo.id}
              >
                <div className='flex items-center gap-4'>
                  <span
                    className={`w-6 h-6 rounded-full ${todo.completed ? 'bg-gra' : 'hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%)))]'} hover:p-[1px]`}
                  >
                    <button
                      onClick={() => toggleTodoCompleted(todo.id)}
                      className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor} ${todo.completed ? 'bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%)))]' : ''}`}
                    >
                      {todo.completed && (
                        <img
                          src={IconCheck}
                          alt='icone checked'
                          className='h-2 w-2 m-auto'
                        />
                      )}
                    </button>
                  </span>
                  <p
                    className={`${themeConfig[theme].todo.textColor} cursor-pointer ${todo.completed ? 'line-through opacity-50' : ''}`}
                  >
                    {todo.text}
                  </p>
                </div>
              </li>
            ))}
        </ul>
        {TodoList.length > 0 && (
          <div
            className={` text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}
          >
            <p>{TodoList.length} Itens Total</p>
            <div className='hidden sm:flex gap-4 '>
              <div
                className={`text-blue-500 cursor-pointer ${themeConfig[theme].layout.hoverText}`}
                onClick={() => setFilter('All')}
              >
                All
              </div>
              <div
                className={`cursor-pointer ${themeConfig[theme].layout.hoverText}`}
                onClick={() => setFilter('Active')}
              >
                Active
              </div>
              <div
                className={`cursor-pointer ${themeConfig[theme].layout.hoverText}`}
                onClick={() => setFilter('Completed')}
              >
                Completed
              </div>
            </div>

            <button
              className={` cursor-pointer ${themeConfig[theme].layout.hoverText}`}
            >
              Clear Selected
            </button>
          </div>
        )}
      </div>
      {TodoList.length > 0 && (
        <div
          className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}
        >
          <div
            className={`text-blue-500 cursor-pointer ${themeConfig[theme].layout.hoverText}`}
            onClick={() => setFilter('All')}
          >
            All
          </div>
          <div
            className={`cursor-pointer ${themeConfig[theme].layout.hoverText}`}
            onClick={() => setFilter('Active')}
          >
            Active
          </div>
          <div
            className={`cursor-pointer ${themeConfig[theme].layout.hoverText}`}
            onClick={() => setFilter('Completed')}
          >
            Completed
          </div>
        </div>
      )}
    </>
  );
}
