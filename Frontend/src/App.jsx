import { useState } from 'react'
import './App.css'
import Navbar from './assets/Pages/Navbar'
import Content from './assets/Pages/Content'
import Order from './assets/Pages/Order'
function App() {
  let [page, setPage] = useState("LandingPage")

  return (
    <>
      <div className="bg-third">
        <Navbar setPage={setPage} />
        <Content />
        <Order />
        {/* {page === "LandingPage" &&
          <>
            <h1>hallo</h1>

          </>
        }
        {page === "login" &&
          <p>hallo</p>

        } */}
      </div >
    </>
  )
}

export default App
