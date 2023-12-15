import { useState, useEffect } from 'react';

export default function Hatch() {
    const [pkmn, setPkmn] = useState(null);
    async function getRandomPkmn() {
        try {
            const res = await fetch('api/pokemon/random')
            const data = await res.json();
            if (res.ok) {
                setPkmn(data);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    async function addPkmn() {
        try {
            await fetch('api/pokemon/box/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    name: pkmn.name,
                    box_id: 1,
                    pkmn_id: pkmn.id
                })
            })
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <section className='flex justify-center w-full h-full'>
            <div className='flex flex-col items-center'>
                <button onClick={getRandomPkmn} className='bg-white text-black h-8 px-2'>Random</button>
                {pkmn && <img className='w-64 h-64' src={pkmn.sprites.versions['generation-iv'].platinum.front_default} alt={pkmn.name}></img>}
                {pkmn && <h1>{pkmn.name}</h1>}
                {pkmn && <h1>{`#${pkmn.id}`}</h1>}
                {pkmn && <button onClick={addPkmn} className='bg-white text-black h-8 px-2'>Add</button>}
            </div>
        </section>
    )
}