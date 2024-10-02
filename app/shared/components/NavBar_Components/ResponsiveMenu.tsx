import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export const ResponsiveMenu = ({open}: {open: boolean}) => {
  return (
    <AnimatePresence>
        {
            open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"/>
            )
        }
    </AnimatePresence>
  )
}
