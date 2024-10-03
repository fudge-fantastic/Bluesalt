import { motion, AnimatePresence } from 'framer-motion'
import NavData from './NavData'
import { Link } from '@remix-run/react'
import { Dispatch, SetStateAction } from 'react';

export default function ResponsiveMenu({ open, setOpen }: Readonly<{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; }>) {
  return (
    <AnimatePresence>
        {
            open && (
                <motion.div
                    initial={{ opacity: 0, y: "-100" }}
                    animate={{ opacity: 1, y:"0" }}
                    exit={{ opacity: 0, y: "-100" }}
                    // className="fixed inset-0 bg-black bg-opacity-50 z-40">
                    className='absolute top-10 left-0 w-full h-screen z-40'>

                  <div className='text-lg font-semibold uppercase bg-black text-white dark:bg-white dark:text-black duration-200 p-10 m-6 rounded-2xl'>
                    <ul className="flex flex-col justify-center items-center gap-4">
                      {NavData.map((item) => {
                        return (
                        <li key={item.name}>
                          <Link to={item.href}>{item.name}</Link>
                        </li>)
                      })}
                    </ul>
                  </div>
                </motion.div>
                  )
        }
    </AnimatePresence>
  )
}
