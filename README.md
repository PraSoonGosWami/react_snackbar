# react_snackbar

> A simple snackbar notification for react apps made with Material-ui

[![NPM](https://img.shields.io/npm/v/react_material_snackbar.svg)](https://www.npmjs.com/package/@prasoongoswami/react_snackbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @prasoongoswami/react_snackbar
```

## Usage

##### In your index.js
```jsx
//import SnackBarProvider from @prasoongoswami/react_snackbar
import { SnackBarProvider } from '@prasoongoswami/react_snackbar'

ReactDOM.render(
  //Wrap the SnackBarProvider around the App
  <SnackBarProvider>
    <App/>
  </SnackBarProvider>,
  document.getElementById('root'))
```

##### In your app.js or where you want to show a snackbar

```jsx
//import useAlert hook from @prasoongoswami/react_snackbar
import { useAlert } from '@prasoongoswami/react_snackbar'

const App = () => {
  //use addAlert method to display snackbar
  const { addAlert } = useAlert()
  return (
    <div>
      //addAlert(options)
      //you can customise your snackbar using options parameter
      <button onClick={() => {
        addAlert({message:"Error text", severity:'success'})
      }}>Generate</button>
    </div>

  )
}
```

#### Customize your snackbar
```jsx
//import useAlert hook from @prasoongoswami/react_snackbar
import { useAlert } from '@prasoongoswami/react_snackbar'

const App = () => {
  //use addAlert method to display snackbar
  const { addAlert } = useAlert()
  const options =
    {
      title : 'This is title',
      message: 'This is material snackbar',
      severity: 'error', // error | success | info | warning
      duration: 4000, // duration after which snackbar disappears automatically
      vertical: 'bottom', // vertical placement - bottom | top
      horizontal: 'left', // horizontal placement - left | right | center
      variant: 'filled' // filled | outlined
    }
  return (
    <div>
      //addAlert(options)
      //you can customise your snackbar using options parameter
      <button onClick={() => {
        addAlert(options)
      }}>Generate</button>
    </div>

  )
}
```
#### options
| options    | type   | default | values                        |
|------------|--------|---------|-------------------------------|
| title      | string | empty   | string                        |
| message    | string | empty   | string                        |
| severity   | string | error   | error, info, success, warning |
| duration   | number | 4000    | any (in milliseconds)         |
| vertical   | string | bottom  | bottom, top                   |
| horizontal | string | bottom  | left, right, center           |
| variant    | string | filled  | filled, outlined              |


## License

MIT © [PraSoonGosWami](https://github.com/PraSoonGosWami)
