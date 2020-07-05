import React from 'react';
import Link from 'next/link';

// import styles from './styles.module.css'




const Header = () => {
    return (
<>
    <div className="Navbar">
        <ul className="flex justify-between text-2xl">
            <li className="mr-3">
            <Link href='/'>
                <a className="inline-block border border-white rounded hover:border-gray-200 text-yellow-600 hover:bg-gray-200 py-1 px-4 text-base sm:text-lg md:text-xl lg:text-2xl">Home</a>
            </Link>
            </li>
            <li className="mr-3">
            <Link href='/contato'>
                <a className="inline-block border border-white rounded hover:border-gray-200 text-yellow-600 hover:bg-gray-200 py-1 px-4 text-base sm:text-lg md:text-xl lg:text-2xl">Contato</a>
            </Link>
            </li>
            <li className="mr-3">
            <Link href='/sobre'>
                <a className="inline-block border border-white rounded hover:border-gray-200 text-yellow-600 hover:bg-gray-200 py-1 px-4 text-base sm:text-lg md:text-xl lg:text-2xl">Sobre</a>
            </Link>
            </li>
        </ul>
    </div>  


</>
    )
}

export default Header;