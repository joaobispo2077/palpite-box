import React from 'react';
import Link from 'next/link';

import '../css/styles.css'

const MyApp = ({Component, pageProps}) => {
    return (
        <div className="bg-gray-200 max-w-sm w-full lg:max-w-full lg:flex">
            <div className="">
            <h1 className="">MyApp</h1>

            <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp;