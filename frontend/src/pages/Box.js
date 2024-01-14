import {useState, useEffect} from 'react'
import BoxPkmn from '../components/BoxPkmn.js'

export default function Box() {
    const [boxPkmn, setBoxPkmn] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`api/pokemon/box/${1}`)
                const data = await res.json();
                if (res.ok) {
                    setBoxPkmn(data);
                }
            }
            catch (error) {
                console.error(error);
            }
        })();
    },[])
    return (
        <section className='flex justify-center w-full h-full'>
            <div className='border w-4/5 lg:w-2/5 h-5/6 grid grid-rows-6 grid-cols-6'>
                {boxPkmn && boxPkmn.map(pkmn => <BoxPkmn pkmn={pkmn}/>)}
            </div>
        </section>
    )
}