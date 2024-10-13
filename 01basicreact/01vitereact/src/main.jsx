import { StrictMode } from 'react' 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>cuStom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)


const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me',
  anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
    // reactElement
    // MyApp()
  // {/* // </StrictMode>, */}
)
 