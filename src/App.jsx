import { useState } from 'react'
import Poi from './Poi'

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
      <Poi x={70} y={100} name={"Era Overview"} desc={"1 AD: jesus allegedly dies 1 year before this. the roman empire has almost total dominance over the known world. christianity begins to spread through rome"}/>
    )}

    {era === 100 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"greater era of the roman empire, sassanids in the east still pose a threat. otherwise, the pax romana remains. christianity very prevalent in rome"}/>
    )}

    {era === 200 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"the amount of rulers to rule the roman empire ramps up as emperors die or abdicate one after another. the roman empire begins to weaken"}/>
    )}

    {era === 300 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"the power of the roman empire begins to falter as barbarians take advantage of its weakened central government"}/>
    )}

    {era === 400 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"the roman empire falls! it is divided into east and west. the east survives in byzantium, the west is broken up by barbarians"}/>
    )}

    {era === 500 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"mass migration into europe, latin blends with saxon and barbarian culture, ostrogoths rule much of rome before europe is spread between many, many states"}/>
    )}

    {era === 600 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"start of the great northern age, saxons move to the british isles and become anglo-saxons, chaos still reigns in europe but many are unified by christianity"}/>
    )}

    {era === 700 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"feudal nations begin to form, topped off by the reign of charlemagne, which establishes the pope as a powerful figure in european politics. great schism between orthodoxy and catholicism occurs"}/>
    )}

    {era === 800 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"beginning of the early middle ages, northern age in full swing as they terrorize central and western europe, great wars in the british isles, house capet successful in france"}/>
    )}

    {era === 900 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"wars for britain end in an anglo-saxon victory, and many northerners are kicked out of the isles. the HRE becomes the strongest figure in europe"}/>
    )}

    {era === 1000 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"true beginning of the middle ages as the northern age wraps up, not before william the conqueror gains control of england and merges anglo-saxon customs with norse ones, providing the groundwork for modern english"}/>
    )}

    {era === 1100 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"england and france are fully laid out as the strongest feudal societies in western europe before the HRE. they have a heated rivalry and cause major discourse. spanish conquista begins after centuries of muslim dominance"}/>
    )}

    {era === 1200 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"beginning of the late middle ages and the start of mongol invasions. genghis khan becomes prominent in the steppes of asia and begins his mass conquest which will soon reach the borders of europe. angevin empire completes its wars, encompassing england and nearly all of france"}/>
    )}

    {era === 1300 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"angevin empire falls apart. mongols reach europe, causing a dangerous threat that nearly wipes out the byzantine empire. novgorod sees some success in unifying russian tribes, italian city-states resist the HRE's iron grip"}/>
    )}

    {era === 1400 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"middle ages end, gunpowder reaches europe and ship industry advances. byzantines will soon be defeated by the ottomans"}/>
    )}

    {era === 1500 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"enlightenment begins and the americas are discovered. colonization is about to go crazy"}/>
    )}

    {era === 1600 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"colonization goes huge, enlightenment wears off and leaves us with many different religions"}/>
    )}

    {era === 1700 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"colonization in full swing, america will declare independence more than halfway through the century"}/>
    )}

    {era === 1800 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"napoleonic wars overtake europe, later on the industrial revolution occurs. scramble for africa later in the century"}/>
    )}

    {era === 1900 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"perhaps the most revolutionary era. ww1, ww2, and cold war all take place"}/>
    )}

    {era === 2000 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"9/11 is gonna happen in one year. world is at relative peace, information era in full swing"}/>
    )}

    {era === 2026 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"ooooh this is the present day check it out bro yooo"}/>
    )}
  </div>
}

// test

export default App