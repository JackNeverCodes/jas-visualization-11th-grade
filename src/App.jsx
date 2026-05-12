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
      <img width={800} className="self-center" src="1AD.png"/>
    </>)}

    {era === 100 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1-100 AD: jesus allegedly dies 1 year before the start of this century. the roman empire has almost total dominance over the known world. christianity begins to spread through rome"}/>
      <img width={800} className="self-center" src="100AD.png"/>
    </>)}

    {era === 200 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"101-200 AD: greater era of the roman empire, sassanids in the east still pose a threat. otherwise, the pax romana remains. christianity very prevalent in rome"}/>
      <img width={800} className="self-center" src="200 AD.png"/>
    </>)}

    {era === 300 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"201-300 AD: the amount of rulers to rule the roman empire ramps up as emperors die or abdicate one after another. the roman empire begins to weaken"}/>
      <img width={800} className="self-center" src="300 AD.png"/>
    </>)}

    {era === 400 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"301-400 AD: the power of the roman empire begins to falter as barbarians take advantage of its weakened central government"}/>
      <img width={800} className="self-center" src="400 AD.png"/>
    </>)}

    {era === 500 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"401-500 AD: the roman empire falls! it is divided into east and west. the east survives in byzantium, the west is broken up by barbarians"}/>
      <img width={800} className="self-center" src="500 AD.png"/>
    </>)}

    {era === 600 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"501-600 AD: mass migration into europe, latin blends with saxon and barbarian culture, ostrogoths rule much of rome before europe is spread between many, many states"}/>
      <img width={800} className="self-center" src="600 AD.png"/>
    </>)}

    {era === 700 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"601-700 AD: start of the great northern age, saxons move to the british isles and become anglo-saxons, chaos still reigns in europe but many are unified by christianity. north africa is sweeped by the muslim conquests, posing a danger to said christianity after the holy land is overtaken by muslims and the forming islam religion"}/>
      <img width={800} className="self-center" src="700 AD.png"/>
    </>)}

    {era === 800 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"701-800 AD: feudal nations begin to form, topped off by the reign of charlemagne, which establishes the pope as a powerful figure in european politics. great schism between orthodoxy and catholicism occurs"}/>
      <img width={800} className="self-center" src="800 AD.png"/>
    </>)}

    {era === 900 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"801-900 AD: beginning of the cosmic centur- i mean the early middle ages, northern age in full swing as they terrorize central and western europe, great wars in the british isles, house capet successful in france"}/>
      <img width={800} className="self-center" src="900 AD.png"/>
    </>)}

    {era === 1000 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"901-1000 AD: wars for britain end in an anglo-saxon victory, and many northerners are kicked out of the isles. the HRE becomes the strongest figure in europe"}/>
      <img width={800} className="self-center" src="1000 AD.png"/>
    </>)}

    {era === 1100 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1001-1100 AD: true beginning of the middle ages as the northern age wraps up, not before william the conqueror gains control of england and merges anglo-saxon customs with norse ones, providing the groundwork for modern english"}/>
      <img width={800} className="self-center" src="1100 AD.png"/>
    </>)}

    {era === 1200 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1101-1200 AD: england and france are fully laid out as the strongest feudal societies in western europe before the HRE. they have a heated rivalry and cause major discourse, ending in the victory of the angevin empire, who takes much of france. spanish conquista begins after centuries of muslim dominance"}/>
      <img width={800} className="self-center" src="1200 AD.png"/>
    </>)}

    {era === 1300 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1201-1300 AD: beginning of the late middle ages and the start of mongol invasions. genghis khan becomes prominent in the steppes of asia and progresses his conquests to the very borders of europe. angevin empire completes its wars, encompassing england and nearly all of france, though the dynasty falls by the end of the century"}/>
      <img width={800} className="self-center" src="1300 AD.png"/>
    </>)}

    {era === 1400 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1301-1400 AD: england and france stand strong as england begins to invade ireland and france centralizes power in the monarchy. the reconquista of iberia is a major christian success. the formation of the kalmar union unites scandinavia. novgorod sees some success in unifying russian tribes, italian city-states resist the HRE's iron grip, and the byzantines begin their last stand. they will soon be destroyed entirely, leaving no true successor to the roman empire. the polish-lithuanian commonwealth is formed"}/>
      <img width={800} className="self-center" src="1400 AD.png"/>
    </>)}

    {era === 1500 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1401-1500 AD: middle ages end, gunpowder reaches europe and ship industry advances. by 1453, the byzantines are entirely defeated by the ottomans. the grand principality of muscovy begins its conquest, and venice becomes a powerful trade empire"}/>
      <img width={800} className="self-center" src="1500 AD.png"/>
    </>)}

    {era === 1600 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1501-1600 AD: enlightenment begins and the americas are discovered. colonization is about to go crazy"}/>
      <img width={800} className="self-center" src="1600 AD.png"/>
    </>)}

    {era === 1700 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1601-1700 AD: colonization goes huge, enlightenment wears off and leaves us with many different branches of christianity. many in the european world focuses externally on great colonization campaigns. the russians finish their great colonization of siberia"}/>
      <img width={800} className="self-center" src="1700 AD.png"/>
    </>)}

    {era === 1800 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1701-1800 AD: colonization in full swing, america will declare independence more than halfway through the century. the french revolution begins near the end of the century"}/>
      <img width={800} className="self-center" src="1800 AD.png"/>
    </>)}

    {era === 1900 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1801-1900 AD: napoleonic wars overtake europe for two decades, leaving revolutionary ideas and nationalism to unite all of italy and germany into respectable nations."}/>
      <img width={800} className="self-center" src="1900 AD.png"/>
    </>)}

    {era === 2000 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"1901-2000 AD: perhaps the most revolutionary era. ww1, ww2, and the cold war have taken place. after the carnage, the world is at relative peace, information era in full swing"}/>
      <img width={800} className="self-center" src="2000 AD.png"/>
    </>)}

    {era === 2026 && (<>
      <Poi x={70} y={100} color="#ffffff" name={"Era Overview"} desc={"2001-2026 AD: ooooh this is the present day check it out bro yooo!! marked by advances in technology, the war on terror, numerous other petty wars, but generally relative peace"}/>
      <img width={800} className="self-center" src="2026 AD.png"/>
    </>)}
  </div>
}

// test

export default App