import React from "react"
// import SignUp from "./pages/signup/signup"
import InboxIcon from "./assets/inboxIcon"

const App: React.FC = () => {
  return (
    <div className=" flex justify-center items-center bg-gray-50 w-screen h-screen">
      <div className="flex w-11/12 h-5/6  shadow-md">
        {/* <SignUp /> */}
        <div className="w-1/5 bg-white p-5 border-r-2 border-gray-50 rounded-l-lg">
          Sidebar
          <div className="flex mt-5 text-gray-700 rounded cursor-pointer hover:bg-gray-100 p-2">
            <InboxIcon />
            <span className="ml-1">Inbox</span>
          </div>
        </div>
        <div className="w-4/5 bg-white p-5 rounded-r-lg">Main Content</div>
      </div>
    </div>
  )
}

export default App
