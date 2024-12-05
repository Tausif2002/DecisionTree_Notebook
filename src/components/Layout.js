import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <div className='flex flex-auto  bg-[#f2f0f0] text-[1rem] font-medium'>
                <Sidebar open={open} setOpen={setOpen}/>
                <div className={`${open?'md:ml-[18%]':'mx-32'} m-auto`}>
                    {/* <Navbar /> */}
                    <div className=''>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
