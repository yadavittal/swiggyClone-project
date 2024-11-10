import React from 'react'
import { useRouteError } from 'react-router-dom'


function ErrorPage() {
    const erroVar=useRouteError();
    console.log(erroVar);
    
  return (

    <div> 
          <h1>OOP'S</h1>
          {/* <h2>{erroVar.error.message}</h2> */}
          {/* <img src="https://apitoolkit.io/blog/application-errors-a-guide-to-error-monitoring/error-monitoring_png.png" alt="" /> */}
          <h2>{erroVar.status}</h2>
          <h3>{erroVar.statusText}</h3>
    </div>
  )
}

export default ErrorPage
