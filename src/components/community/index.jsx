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
        <section className='mt-10 px-6 mb-20'>
            <div className='bg-blue-normal h-24 rounded-lg flex flex-col justify-center items-center relative'>
                <h3 className='font-bold capitalize text-[clamp(1.4rem,6.406vw-1rem,1.6rem)] text-white'>Join The Community</h3>
                <div className='absolute bottom-[-30px] flex gap-4'>
                    {
                        socialMediaLink.map(link => (<SocialMedia key={link} name={link} />))
                    }

                </div>
            </div>

        </section>
    )
}

export default Community