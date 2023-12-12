import { useEffect, useState } from "react"


export default function Home() {
    const [msg, setMsg] = useState(null);
    useEffect(() => {
        // (async() => {
        //     const res = await fetch('/true')
        //     const data = await res.json();
        //     if (res.ok) {
        //         setMsg(data.working);
        //     }
        // })()
    },[])
    return (
        <section className='flex justify-center'>
            <div className='lg:w-1/2 flex flex-col items-center'>
                <h1 className='lg:text-xl'>Welcome to Pokemon Team Builder</h1>
            </div>
        </section>
    )
}