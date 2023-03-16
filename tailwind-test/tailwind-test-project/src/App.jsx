import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="main-container">
        <div className='tw-p-5'>
          <h1 className='holo-main-title'>TEST</h1>
        </div>
        <div className='common-container'>
          <h1 className="tw-text-3xl tw-font-bold tw-underline">
            Hello world!
          </h1>
        </div>
        <div className='common-container'>
          <button className="tw-holo-btn tw-holo-btn-primary">Button</button>
        </div>

        <div tabIndex={0} className="tw-holo-collapse"> 
          <div className="tw-holo-collapse-title tw-text-xl tw-font-medium">
            Focus me to see content
          </div>
          <div className="tw-holo-collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
