import React from 'react';
import Link from 'next/link';
import Header from '../components/Header'

import '../css/styles.css'

const MyApp = ({Component, pageProps}) => {
    return (
        <div className="bg-gray-200 p-8 w-screen h-screen">
            <div className="bg-white container mx-auto w-auto h-auto border-solid rounded-md p-2">
            <Header />
            {/* <h1 className="">MyApp</h1>

            <Component {...pageProps} /> */}
            </div>
        </div>
    )
}

export default MyApp;