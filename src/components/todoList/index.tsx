import { themeConfig } from "../../contexts/theme"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useContext } from "react"

export default function TodoList() {

  const {theme} = useContext(ThemeContext)

    const todos = [
    {id: 1, text: 'todo'},
    {id: 2, text: 'todo'},
    {id: 3, text: 'todo'}
    ]

  return (
    <div className={`${themeConfig[theme].todo.backgroundColor} w-full rounded-md`}>
            <ul>
              {todos.map((todo) => (
                <li className={`p6 border-b ${themeConfig[theme].todo.borderColor}`} key={todo.id}>
                  <div className="flex items-center gap-4">
                    <button className="w-6 h-6 border border-neutral-600 rounded-full cursor-pointer"></button>
                    <p className={`${themeConfig[theme].todo.textColor}`}
                    >{todo.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={` text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor}`}>
                <p>{todos.length} Itens Total</p>
                <div className="flex gap-4 ">
                    <div className="text-blue-500">All</div>
                    <div>Active</div>
                    <div>Completed</div>
                </div>
                
                <button>Clear Selected</button>
            </div>
          </div>
  )
}
