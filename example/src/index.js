import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//import SnackBarProvider from react_material_snackbar_alert
import { SnackBarProvider } from 'react_material_snackbar_alert'

ReactDOM.render(
  //Wrap the SnackBarProvider around the App
  <SnackBarProvider>
    <App/>
  </SnackBarProvider>,
  document.getElementById('root'))
