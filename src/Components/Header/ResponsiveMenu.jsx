import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const ResponsiveMenu = ({open}) => {
    return (
        <AnimatePresence mode='wait'>
            {
                open && (
                    <motion.div 
                    initial={{ opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    exit={{ opacity: 0, y: -100}}
                    transition={{ duration: 0.3 }}
                    className='absolute top-20 left-0 w-full h-screen z-20'
                    >
                        <div className='items-center gap-6 text-white font-bold bg-[#2B1B12] py-2 m-6 rounded-3xl'>
                            <ul className='flex flex-col justify-center items-center gap-5'>
                                <li>Home</li>
                                <li>Service</li>
                                <li>Agents</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveMenu
