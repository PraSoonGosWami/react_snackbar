import React, { createContext, useState, useContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import PropTypes from 'prop-types'

const AlertNotification = (props) => {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.duration}
      onClose={props.onClose}
      disableWindowBlurListener={true}
      anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
    >
      <Alert
        severity={props.severity}
        variant={props.variant}
        onClose={props.onClose}
      >
        {props.title.length > 0 && <AlertTitle>{props.title}</AlertTitle>}
        {props.children}
      </Alert>
    </Snackbar>
  )
}
AlertNotification.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  severity: PropTypes.string,
  duration: PropTypes.number,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  variant: PropTypes.string
}

const SnackBarContext = createContext([])

// wrap the provider as parent in index.js or app.js
export function SnackBarProvider({ children }) {
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState([])

  const defaults = {
    title: '',
    message: '',
    severity: 'error',
    duration: 4000,
    vertical: 'bottom',
    horizontal: 'left',
    variant: 'filled'
  }
  const addAlert = (config) => {
    const option = Object.assign(defaults, config)
    setShowAlert(true)
    setAlert([option])
  }

  const value = { addAlert }

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alert.map((el) => (
        <AlertNotification
          title={el.title}
          key={el.title}
          open={showAlert}
          duration={el.duration}
          vertical={el.vertical}
          horizontal={el.horizontal}
          variant={el.variant}
          onClose={() => setShowAlert(false)}
          severity={el.severity}
        >
          {el.message}
        </AlertNotification>
      ))}
    </SnackBarContext.Provider>
  )
}

export const useAlert = () => useContext(SnackBarContext)
