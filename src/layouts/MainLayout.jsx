import { Outlet } from "react-router"


function MainLayout() {
  return (
    
    <div className="min-h-screen flex justify-center items-center">
        <Outlet />
    </div>
  )
}

export default MainLayout