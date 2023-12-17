import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './component/home/Home'
import Authentication from './component/auth/Authentication'
import Hero from './hero/Hero'
import ProfilePage from './pages/profilePage/ProfilePage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreatePost from './component/createPost/CreatePost'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('jwt')

    if (!token) {
      navigate('/auth')
    }
  }, [])

  return (
    <>
      <Hero>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/auth"
            element={<Authentication />}
          />
          <Route
            path="/login"
            element={<Authentication />}
          />
          <Route
            path="/:userName"
            element={<ProfilePage />}
          />
          <Route
            path="/createPost"
            element={<CreatePost />}
          />
        </Routes>
      </Hero>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
