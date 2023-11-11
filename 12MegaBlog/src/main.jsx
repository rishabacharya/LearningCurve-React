import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import Protected from './components/AuthLayout.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SignUp from './components/SignUp.jsx'
import AllPosts from './pages/AllPosts'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import { createBrowserRouter,createRoutesFromElements } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "",
            element: <Home />,
        },
        {
            path: "login",
            element: (
                <Protected authentication={false}>
                    <Login />
                </Protected>
            ),
        },
        {
            path: "signup",
            element: (
                <Protected authentication={false}>
                    <SignUp />
                </Protected>
            ),
        },
        {
            path: "all-posts",
            element: (
                <Protected authentication>
                    {" "}
                    <AllPosts />
                </Protected>
            ),
        },
        {
            path: "add-post",
            element: (
                <Protected authentication>
                    {" "}
                    <AddPost />
                </Protected>
            ),
        },
        {
            path: "edit-post/:slug",
            element: (
                <Protected authentication>
                    {" "}
                    <EditPost />
                </Protected>
            ),
        },
        {
            path: "post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
