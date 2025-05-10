import { Outlet } from "react-router"

function App() {

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Outlet />
    </main>
  )
}

export default App
