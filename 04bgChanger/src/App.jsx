import { useState } from 'react'

function App() {
  const [color, setColor] = useState("bg-gray-800");
  return (
    <>
      <div className={`${color} min-h-screen flex justify-around items-end`}>
        <div className="flex rounded-b-2xl justify-around p-4 m-4 absolute bg-white ">
          <button type="button" onClick={() => setColor("bg-red-500")} className="ring-2 rounded-2xl p-4 m-4 grow shadow-lg ring-red-500">Red</button>
          <button type="button" onClick={() => setColor("bg-blue-500")} className="border-1 rounded-2xl p-4 m-4 grow shadow-lg bg-blue-500 shadow-blue-500/50">Blue</button>
          <button type="button" onClick={() => setColor("bg-green-300")} className="ring-2 rounded-2xl p-4 m-4 grow shadow-lg ring-green-300">Green</button>
          <button type="button" onClick={() => setColor("bg-cyan-300")} className="border-1 rounded-2xl p-4 m-4 grow shadow-lg bg-cyan-300 shadow-cyan-500/50">Cyan</button>
          <button type="button" onClick={() => setColor("bg-sky-300")} className="ring-2 rounded-2xl p-4 m-4 grow shadow-lg ring-sky-300">sky</button>
          <button type="button" onClick={() => setColor("bg-indigo-500")} className="border-1 rounded-2xl p-4 m-4 grow shadow-lg bg-indigo-500 shadow-indigo-500/50">Indigo</button>
        </div>
      </div>
    </>
  )
}
export default App