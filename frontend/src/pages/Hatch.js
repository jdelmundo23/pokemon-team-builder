import {useState, useEffect} from 'react';

export default function Hatch() {
    const [pkmn, setPkmn] = useState(null);
    async function getRandomPkmn() {
        try{
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
    return (
        <section className='flex justify-center w-full h-full'>
            <div className='flex flex-col items-center'>
                <button onClick={getRandomPkmn} className='bg-white text-black h-8 px-2'>Random</button>
                {pkmn && <img className='w-64 h-64' src={pkmn.sprites.versions['generation-iv'].platinum.front_default}></img>}
            </div>
        </section>
    )
}