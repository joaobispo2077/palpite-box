import React from 'react';
import Link from 'next/link';
import  Layout  from '../components/Layout'


import '../css/styles.css'



const MyApp = ({Component, pageProps}) => {
    return (
        <div className="bg-gray-300 p-8 w-full h-full">
            <div className="bg-gray-300 p-0 w-sreen h-sreen">
                <div className="bg-white container mx-auto w-11/12 h-11/12 border-solid rounded-md p-2">
                <Layout>
                
                    <Component {...pageProps} />         
                </Layout>   
        
                </div>
            </div>

        </div>
    )
}

export default MyApp;