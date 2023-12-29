import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/images/Group 2.png'
import {
    LayoutDashboard, Clock3, BarChart2, ArrowRightLeft, HelpCircle
} from "lucide-react"
import RightArrow from '../assets/images/Vector.png'


const navlinks = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
    },
    {
        name: 'Activity',
        icon: Clock3,
    },
    {
        name: 'Analytics',
        icon: BarChart2,
    },
    {
        name: 'Transactions',
        icon: ArrowRightLeft,
    },
    {
        name: 'Help center',
        icon: HelpCircle,
    },
]

const variants = {
    expanded: { width: '20%' },
    nonexpanded: { width: '5%' }
}
function NavigationBar() {
    const [activeNavIndex, setactiveNavIndex] = useState(0)
    const [isExpanded, setIsExpanded] = useState(true)

    return (

        <motion.div
            animate={
                isExpanded ? "expanded" : "nonexpanded"
            }
            variants={variants}
            className={" py-12 flex flex-col border border-r-1 w-1/5 h-screen relative" + (isExpanded ? "px-10" : "px-4")} >

            < div className='logo-div flex space-x-4 items-center ' >
                <img src={logo} alt="" />
                <span className={isExpanded ? 'block' : 'hidden'}>Money Tracker</span>
            </div >
            <div onClick={() => setIsExpanded(!isExpanded)} className={'w-5 h-5 bg-[#ff8cbc] rounded-full absolute right-[1030.5px] top-16 flex items-center justify-center ' + (isExpanded ? "block" : "right-[1215.5px]")}>
                <img src={RightArrow} alt="right arrow" />
            </div>

            <div className='mt-10 flex flex-col space-y-8'>

                {navlinks.map(
                    (item, index) => [<div key={index} className={"flex space-x-3 p-2" + (activeNavIndex === index ?
                        " bg-[#ff8c8c] text-white font-semibold"
                        : " ")}
                        onClick={() => setactiveNavIndex(index)}

                    >
                        <item.icon />
                        <span className={isExpanded ? 'block' : 'hidden'}>{item?.name}</span>

                    </div>]
                )}
            </div>
        </motion.div >
    )
}

export default NavigationBar