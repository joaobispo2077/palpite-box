import React from 'react';
import Link from 'next/link';
import  Layout  from '../components/Layout'


import '../css/styles.css'



const MyApp = ({Component, pageProps}) => {
    return (
        <div className="bg-gray-300 p-8 w-screen h-screen">
            <div className="bg-white container mx-auto w-11/12 h-11/12 border-solid rounded-md p-2">
            <Layout>
            
                <Component {...pageProps} />         
            </Layout>   
       
            </div>
        </div>
    )
}

export default MyApp;