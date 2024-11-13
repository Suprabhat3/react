import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    > <h1 className='flex-auto text-blue-800 h-10 flex-wrap text-2xl justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"'>This website is make by Suprabhat for Education purpose</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> <h1 className='t outline-none px-4 py-1 rounded-full text-black shadow-lg'> Click on give Buttons for Background colour Change </h1>
         
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
           <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >pink</button>
           <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "lavender"}}
          >lavender</button>
          <button
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          >brown</button>
          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >purple</button>
          <button
          onClick={() => setColor("teal")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "teal"}}
          >teal</button>
        </div>
      </div>
    </div>
  )
}
export default App;