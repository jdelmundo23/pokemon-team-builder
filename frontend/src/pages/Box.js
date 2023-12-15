import {useState, useEffect} from 'react'

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
                {boxPkmn && boxPkmn.map(pkmn => <img className='w-20' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${pkmn.pkmn_id}.png`} alt={pkmn.name}></img>)}
            </div>
        </section>
    )
}