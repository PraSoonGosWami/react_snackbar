import React from 'react'

//import useAlert hook from react_material_snackbar_alert
import { useAlert } from 'react_material_snackbar_alert'

const App = () => {
  //use addAlert method to display snackbar
  const { addAlert } = useAlert()
  return (
    <div>
      <button onClick={() => {
        addAlert({title:"This is title", message:"Error message", severity:'error'})
      }}>Generate</button>
    </div>

  )
}

export default App
