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
    {era === 1 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"<1 AD: the world as we know it is formed. societies eventually begin to develop around 5000 BC, and after the eras of phoenicia, carthage, and the early migratory hordes of ancient europe, the roman republic establishes an empire and reigns supreme over much of the 'known world'."}/>
      <img width={800} className="self-center" src="western europe no borders template.jpg"/>
    </>)}

    {era === 100 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1-100 AD: jesus allegedly dies 1 year before the start of this century. the roman empire has almost total dominance over the known world. christianity begins to spread through rome"}/>
    )}

    {era === 200 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"101-200 AD: greater era of the roman empire, sassanids in the east still pose a threat. otherwise, the pax romana remains. christianity very prevalent in rome"}/>
    )}

    {era === 300 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"201-300 AD: the amount of rulers to rule the roman empire ramps up as emperors die or abdicate one after another. the roman empire begins to weaken"}/>
    )}

    {era === 400 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"301-400 AD: the power of the roman empire begins to falter as barbarians take advantage of its weakened central government"}/>
    )}

    {era === 500 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"401-500 AD: the roman empire falls! it is divided into east and west. the east survives in byzantium, the west is broken up by barbarians"}/>
    )}

    {era === 600 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"501-600 AD: mass migration into europe, latin blends with saxon and barbarian culture, ostrogoths rule much of rome before europe is spread between many, many states"}/>
    )}

    {era === 700 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"601-700 AD: start of the great northern age, saxons move to the british isles and become anglo-saxons, chaos still reigns in europe but many are unified by christianity"}/>
    )}

    {era === 800 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"701-800 AD: feudal nations begin to form, topped off by the reign of charlemagne, which establishes the pope as a powerful figure in european politics. great schism between orthodoxy and catholicism occurs"}/>
    )}

    {era === 900 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"801-900 AD: beginning of the cosmic centur- i mean the early middle ages, northern age in full swing as they terrorize central and western europe, great wars in the british isles, house capet successful in france"}/>
    )}

    {era === 1000 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"901-1000 AD: wars for britain end in an anglo-saxon victory, and many northerners are kicked out of the isles. the HRE becomes the strongest figure in europe"}/>
    )}

    {era === 1100 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1001-1100 AD: true beginning of the middle ages as the northern age wraps up, not before william the conqueror gains control of england and merges anglo-saxon customs with norse ones, providing the groundwork for modern english"}/>
    )}

    {era === 1200 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1101-1200 AD: england and france are fully laid out as the strongest feudal societies in western europe before the HRE. they have a heated rivalry and cause major discourse. spanish conquista begins after centuries of muslim dominance"}/>
    )}

    {era === 1300 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1201-1300 AD: beginning of the late middle ages and the start of mongol invasions. genghis khan becomes prominent in the steppes of asia and begins his mass conquest which will soon reach the borders of europe. angevin empire completes its wars, encompassing england and nearly all of france"}/>
    )}

    {era === 1400 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1301-1400 AD: angevin empire falls apart. mongols reach europe, causing a dangerous threat that nearly wipes out the byzantine empire. novgorod sees some success in unifying russian tribes, italian city-states resist the HRE's iron grip"}/>
    )}

    {era === 1500 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1401-1500 AD: middle ages end, gunpowder reaches europe and ship industry advances. byzantines will soon be defeated by the ottomans"}/>
    )}

    {era === 1600 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1501-1600 AD: enlightenment begins and the americas are discovered. colonization is about to go crazy"}/>
    )}

    {era === 1700 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1601-1700 AD: colonization goes huge, enlightenment wears off and leaves us with many different religions"}/>
    )}

    {era === 1800 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1701-1800 AD: colonization in full swing, america will declare independence more than halfway through the century"}/>
    )}

    {era === 1900 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1801-1900 AD: napoleonic wars overtake europe. later on, the industrial revolution occurs. scramble for africa leaves only two independent nations: ethiopia and liberia"}/>
    )}

    {era === 2000 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"1901-2000 AD: perhaps the most revolutionary era. ww1, ww2, and the cold war has taken place. after the carnage, the world is at relative peace, information era in full swing"}/>
    )}

    {era === 2026 && (
      <Poi x={70} y={100} name={"Era Overview"} desc={"2001-2026 AD: ooooh this is the present day check it out bro yooo!! marked by advances in technology, the war on terror, numerous other petty wars, but generally relative peace"}/>
    )}
  </div>
}

// test

export default App