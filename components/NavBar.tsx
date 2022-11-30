import Link from 'next/link'
import { useState } from 'react'

// const navLinks = [
//     { text: 'Home', href: '/' },
//     { text: 'About', href: '/about' },
//     { text: 'Chess', href: '/chess' },
//     { text: 'Blog', href: '/blog' },
// ]

export default function NavBar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div>
            <nav className="grid grid-cols-2 bg-[#121212] p-6 text-stone-200">
                <Link href='/' className='text-2xl font-bold'>
                    <p className='hover:text-rose-500'>
                        Aakaash
                            <sup className='font-features sups text-lg font-light'>
                                .xyz
                            </sup>
                    </p>
                </Link>
                <div id='sub-pages' className='grid grid-cols-3 font-medium'>
                    <Link href='/about' className='flex justify-end'>
                        <p className='hover:text-amber-300'>
                            LabDAO
                        </p>
                    </Link>
                    <Link href='' className='flex justify-end'>
                        <p className='hover:text-green-500'>
                            Writing
                        </p>
                    </Link>
                    <Link href='' className='flex justify-end'>
                        <p className='hover:text-blue-600'>
                            Chess
                        </p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}