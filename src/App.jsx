import { useState } from 'react'

const eras = [1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2026]

function App() {
  const [era, setEra] = useState(1)

  function onChange(e) {
    let snapEra = 1
    for (const era of eras) {
      if (Math.abs(e.target.value - era) < Math.abs(e.target.value - snapEra))
        snapEra = era
    }

    setEra(snapEra)
  }

  return <div className="flex flex-col">
    <input className="m-8" type="range" min={1} max={2026} value={era} onChange={onChange}/>
    {era === 1 && (
      <p className="absolute top-[100px] left-[200px]">I am era 1</p>
    )}

    {era === 100 && (
      <p>I am era 100</p>
    )}
  </div>
}

export default App