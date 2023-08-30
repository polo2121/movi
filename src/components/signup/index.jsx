import React from 'react'

export const SignUp = () => {
    return (
        <section className='mt-10 px-6'>
            <div className='relative bg-blue-light p-8 flex flex-col gap-4 rounded-lg'>
                <h3 className='capitalize font-bold text-3xl'>Join Today</h3>
                <p className='text-xl mb-4'>Get access to maintain your own custom personal lists, track what you've seen and search and
                    filter for what to watch next—regardless if it's in theatres, on TV or available on popular
                    streaming services like.
                </p>
                <button className='absolute bottom-[-30px] left-0 right-0 m-auto shadow-lg w-[90%] rounded-lg bg-blue-normal text-white font-bold text-xl px-8 py-4'>Sign Up</button>
            </div>
        </section>
        //  text-[clamp(1.4rem,6.406vw-1rem,2rem)]
    )
}

export default SignUp;