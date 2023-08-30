import React from 'react'


// - components
import SocialMedia from './social-media'

// - assets
import Facebook from "../../assets/images/facebook.jpg"
import Discord from "../../assets/images/discord.jpg"
import Twitter from "../../assets/images/twitter.jpg"


const Community = () => {

    const socialMediaLink = [Facebook, Discord, Twitter]
    return (
        <section className='mt-12 px-6 mb-20'>
            <div className='bg-blue-normal h-28 rounded-lg flex flex-col justify-center items-center relative'>
                <h3 className='font-bold capitalize text-3xl text-white text-center'>Join The Community</h3>
                <div className='absolute bottom-[-34px] flex gap-4'>
                    {
                        socialMediaLink.map(link => (<SocialMedia key={link} name={link} />))
                    }

                </div>
            </div>

        </section>
    )
}

export default Community