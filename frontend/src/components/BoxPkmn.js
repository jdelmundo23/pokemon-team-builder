import { useState } from 'react'

export default function BoxPkmn({ pkmn }) {
    const [fullShown, setFullShown] = useState(false);

    return (<div className=''>
        <img onClick={() => setFullShown(true)} className='w-20' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${pkmn.pkmn_id}.png`} alt={pkmn.name}></img>
        {fullShown && <>
            <div className='flex items-center h-56 w-96 absolute top-1/2 left-1/2 rounded-md border border-white bg-zinc-900 z-10 translate-x-[-50%] translate-y-[-50%]'>
                <img className='w-44' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/${pkmn.pkmn_id}.png`}></img>
                <div className='text-center'>
                    <p>{pkmn.name}</p>
                    <p>#{pkmn.pkmn_id}</p>
                </div>
            </div>
            <div onClick={() => setFullShown(false)} className='w-screen h-screen absolute top-0 left-0 bg-black opacity-50'></div>
        </>}
    </div>)
}