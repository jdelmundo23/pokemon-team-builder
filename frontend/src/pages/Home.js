import { useEffect, useState } from "react"


export default function Home() {
    const [msg, setMsg] = useState(null);
    useEffect(() => {
        (async() => {
            const res = await fetch('/true')
            const data = await res.json();
            if (res.ok) {
                setMsg(data.working);
            }
        })()
    },[])
    return (
        <div>
            <h1>{msg}</h1>
        </div>
    )
}