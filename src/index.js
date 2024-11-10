import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/ErrorPage';
import Menu from './pages/Menu';

const Body = React.lazy(() => import('./component/Body'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorPage/>,
    children:[
  {
    path:'/',
    element: <Suspense fallback={<h1>Loading...</h1>} ><Body/></Suspense> 
  },
    
  {
    path: '/about',
    element: <About />
  }, 
  {
    path:'/menu/:id',  //rout path passing id as parameter that allow you to capture specific values. In this case
    element:<Menu/>
  },
  {
    path: '/contact',
    element: <ContactUs />
  }]
}
]

)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
