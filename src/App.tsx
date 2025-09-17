import { useContext } from "react"
import TodoForm from "./components/TodoForm"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/todoList"
import { ThemeContext } from "./contexts/ThemeContext"
import { themeConfig } from "./contexts/theme"

function App() {

  const { theme } = useContext(ThemeContext)

  return (
   <main className="bg-navy-950 h-screen">
      <div className={`${themeConfig[theme].layout.heroClass}`}>
        <div className="max-w-[43.75rem] m-auto p-8">
          <TodoHeader />
          <TodoForm />
          <TodoList />
        </div>
      </div>
   </main>
  )
}

export default App
