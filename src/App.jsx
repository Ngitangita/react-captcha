import { RouterProvider } from "react-router-dom"
import router from "./router"
import CaptchaModal from "./components/CaptchaModal"

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <CaptchaModal />
    </>
  )
}
export default App
