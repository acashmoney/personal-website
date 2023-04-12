import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div>
            <nav className="grid grid-cols-2 bg-[#121212] p-10 text-stone-200 navbar-transition">
                <Link href='/' className='text-2xl font-bold'>
                    <h1 className='transition duration-500 hover:text-sky-600'>
                        Aakaash
                        <sup className='font-features sups text-lg font-light'>
                            .xyz
                        </sup>
                    </h1>
                </Link>
                <div id='sub-pages' className='grid grid-cols-3 font-medium'>
                    <Link href='https://labdao.xyz' className='flex justify-end'>
                        <h2>
                            LabDAO
                        </h2>
                    </Link>
                    <Link href='' className='flex justify-end'>
                        <h2>
                            Writing
                        </h2>
                    </Link>
                    <Link href='/chess' className='flex justify-end'>
                        <h2>
                            Chess
                        </h2>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;