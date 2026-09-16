import { Outlet } from "react-router"

function MainLayout() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8">
      <Outlet />
    </div>
  )
}

export default MainLayout