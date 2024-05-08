import React, { useState, useEffect } from 'react';
import img1 from '../../assests/img1.webp';
import { motion } from 'framer-motion';
import './home.css'
function Features() {

const features=[
    {   id:1,
        img:img1,
        title:"Free Consultation",
        description:"loreed hdsu sgsys isu hs sudgdsns uesjshss hws h sioshd s csihc z  zsgb c szsbs bz ",
    },
    {  id:2,
        img:img1,
        title:"Free Consultation",
        description:"loreed hdsu sgsys isu hs sudgdsns uesjshss hws h sioshd s csihc z  zsgb c szsbs bz ",
    },
    {  id:3,
        img:img1,
        title:"Free Consultation",
        description:"loreed hdsu sgsys isu hs sudgdsns uesjshss hws h sioshd s csihc z  zsgb c szsbs bz ",
    },
    {id:4,
        img:img1,
        title:"Free Consultation",
        description:"loreed hdsu sgsys isu hs sudgdsns uesjshss hws h sioshd s csihc z  zsgb c szsbs bz ",
    },
    {id:5,
        img:img1,
        title:"Free Consultation",
        description:"loreed hdsu sgsys isu hs sudgdsns uesjshss hws h sioshd s csihc z  zsgb c szsbs bz ",
    },
    {id:6,
        img:img1,
        title:"Free Consultation",
        description:"loreed hdsu sgsys isu hs sudgdsns uesjshss hws h sioshd s csihc z  zsgb c szsbs bz ",
    }
]

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
        <section className='  bg-blue-500'>
        <div className='z-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,53.3C160,43,320,21,480,64C640,107,800,213,960,218.7C1120,224,1280,128,1360,80L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
            <div>
                <h1 className='lg:text-7xl font-bold text-start relative lg:-top-40 
                -top-10
                ml-5 mb-8 text-4xl'>Features</h1>
            </div>
            <div className='grid mx-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 relative lg:-top-28
            -top-10'>
              <motion.div
                 
                    initial={{opacity:0, x: '-100vw' }}
                    animate={isVisible ? { x: 0 ,opacity:1} : { x: '-100vw',opacity:0 }}
                    transition={{ delay: 0.1, duration: 1.1 }}
                    
                    className='border-2 flex-col text-center  p-6 pb-8 rounded-lg shadow-custom bg-white animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl mb-4 font-semibold'>Munna</h1>
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
                    initial={{ y: '100vh' }}
                    animate={isVisible ? { y: 0 } : { y: '100vh' }}
                    transition={{ delay: 0.1, duration: 1.1 }}
                    className='border-2 flex-col  bg-white  shadow-custom text-center p-6 pb-8 rounded-lg shadow-md animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl mb-4 font-semibold'>Munna</h1>
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
                    animate={isVisible ? { x: 0 } : { x: '100vw' }}
                    transition={{ delay: 0.1, duration: 1.1}}
                    className='border-2 flex-col  bg-white  shadow-custom text-center p-6 pb-8 rounded-lg shadow-md animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl mb-4 font-semibold'>Munna</h1>
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
                    initial={{opacity:0, x: '-100vw' }}
                    animate={isVisible ? { x: 0 ,opacity:1} : { x: '-100vw',opacity:0 }}
                    transition={{ delay: 0.1, duration: 1.1 }}
                    className='border-2 flex-col  bg-white  shadow-custom text-center p-6 pb-8 rounded-lg shadow-md animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl mb-4 font-semibold'>Munna</h1>
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
                    initial={{ y: '100vh' }}
                    animate={isVisible ? { y: 0 } : { y: '100vh' }}
                    transition={{ delay: 0.1, duration: 1.1 }}
                    className='border-2 flex-col  bg-white  shadow-custom text-center p-6 pb-8 rounded-lg shadow-md animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl mb-4 font-semibold'>Munna</h1>
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
                    animate={isVisible ? { x: 0 } : { x: '100vw' }}
                    transition={{ delay: 0.1, duration: 1.1}}
                    className='border-2 flex-col  bg-white  shadow-custom text-center p-6 pb-8 rounded-lg shadow-md animate-on-scroll'>
                    <img src={img1} alt='munna' className='w-40 h-40 border-2 border-gray-500 rounded-full mx-auto my-4 flex justify-center' />
                    <div>
                        <h1 className='text-2xl mb-4 font-semibold'>Munna</h1>
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

export default Features;
