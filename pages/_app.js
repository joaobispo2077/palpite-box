import React from 'react';
import Link from 'next/link';

const MyApp = () => {
    return (
        <div>
            <h1>MyApp</h1>
            <Link href="/">
                <a href="">Home</a>
            </Link>
        </div>
    )
}

export default MyApp;