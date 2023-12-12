export default function Box() {
    return (
        <section className='flex justify-center w-full h-full'>
            <div className='border w-4/5 lg:w-2/5 h-5/6 grid grid-rows-6 grid-cols-6'>
                <img className='w-20' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png'></img>
                <img className='w-20' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/6.png'></img>
            </div>
        </section>
    )
}