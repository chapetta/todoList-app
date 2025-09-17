import { themeConfig } from '../../contexts/theme';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

export default function TodoList() {
  const { theme } = useContext(ThemeContext);

  const todos = [
    { id: 1, text: 'todo' },
    { id: 2, text: 'todo' },
    { id: 3, text: 'todo' },
  ];

  return (
    <>
      <div
        className={`${themeConfig[theme].todo.backgroundColor} w-full rounded-md`}
      >
        <ul>
          {todos.map((todo) => (
            <li
              className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}
              key={todo.id}
            >
              <div className='flex items-center gap-4'>
                <span className='w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%)))] hover:p-[1px]'>
                  <button
                    className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor}`}
                  ></button>
                </span>
                <p
                  className={`${themeConfig[theme].todo.textColor} cursor-pointer`}
                >
                  {todo.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={` text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}
        >
          <p>{todos.length} Itens Total</p>
          <div className='hidden sm:flex gap-4 '>
            <div
              className={`text-blue-500 cursor-pointer ${themeConfig[theme].layout.hoverText}`}
            >
              All
            </div>
            <div
              className={`cursor-pointer ${themeConfig[theme].layout.hoverText}`}
            >
              Active
            </div>
            <div
              className={`cursor-pointer ${themeConfig[theme].layout.hoverText}`}
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
      </div>

      <div
        className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-5 py-4 rounded-md mt-4 sm:hidden`}
      >
        <div
          className={`text-blue-500 cursor-pointer ${themeConfig[theme].layout.hoverText}`}
        >
          All
        </div>
        <div
          className={`cursor-pointer ${themeConfig[theme].layout.hoverText}`}
        >
          Active
        </div>
        <div
          className={`cursor-pointer ${themeConfig[theme].layout.hoverText}`}
        >
          Completed
        </div>
      </div>
    </>
  );
}
