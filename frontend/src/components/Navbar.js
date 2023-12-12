import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='fixed top-0 lg:text-2xl w-full flex flex-col lg:items-center bg-black py-3 px-3'>
            <nav className='flex justify-between lg:w-4/12'>
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/hatch">
                    <h1>Hatch</h1>
                </Link>
                <Link to="/box">
                    <h1>Box</h1>
                </Link>
                <Link to="/friends">
                    <h1>Community</h1>
                </Link>
            </nav>
        </div>
    )
}