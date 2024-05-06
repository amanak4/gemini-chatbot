import React, { useState, useEffect } from 'react';
import img1 from '../../assests/img1.webp';
import { motion } from 'framer-motion';

function HowItWorks() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight * 0.75) {
                    setIsVisible(true);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='pb-4 mb-5'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-4'>How IntelliDoc works</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={isVisible ? { x: 0 } : { x: '-100vw' }}
                    transition={{ delay: 0.3, duration: 1, type: 'spring', stiffness: 50 }}
                    className='border-2 flex-col text-center mx-8 p-4 rounded-lg shadow-md animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl font-semibold'>Munna</h1>
                        <p>
                            lorem ipsum
                            jiej jshh lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={isVisible ? { x: 0 } : { x: '-100vw' }}
                    transition={{ delay: 0.3, duration: 1, type: 'spring', stiffness: 50 }}
                    className='border-2 flex-col text-center mx-8 p-4 rounded-lg shadow-md animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl font-semibold'>Munna</h1>
                        <p>
                            lorem ipsum
                            jiej jshh lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: '100vw' }}
                    animate={isVisible ? { x: 0 } : { x: '-100vw' }}
                    transition={{ delay: 0.3, duration: 1, type: 'spring', stiffness: 50 }}
                    className='border-2 flex-col text-center mx-8 p-4 rounded-lg shadow-md animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl font-semibold'>Munna</h1>
                        <p>
                            lorem ipsum
                            jiej jshh lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                            lorem ipsum
                            jiej jshh
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HowItWorks;
