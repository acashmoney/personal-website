import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div>
            <nav className="grid grid-cols-2 bg-[#121212] p-10 text-stone-200">
                <Link href='/' className='text-2xl font-bold'>
                    <p className='transition duration-500 hover:text-sky-600'>
                        Aakaash
                            <sup className='font-features sups text-lg font-light'>
                                .xyz
                            </sup>
                    </p>
                </Link>
                <div id='sub-pages' className='grid grid-cols-3 font-medium'>
                    <Link href='https://labdao.xyz' className='flex justify-end'>
                        <p>
                            LabDAO
                        </p>
                    </Link>
                    <Link href='' className='flex justify-end'>
                        <p>
                            Writing
                        </p>
                    </Link>
                    <Link href='/chess' className='flex justify-end'>
                        <p>
                            Chess
                        </p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}