import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'
import HamburgerButton from './HamburgerMenuButton/HamburgerButton'

const Sidebar = ({open, setOpen}) => {
  // const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const Menus = [
    { title: 'Introduction', path: '/introduction'},
    { title: 'The Story', path: '/story' },
    { title: 'Terminologies Used', path: '/terminologies' },
    { title: 'Decision Tree In AI', path: '/decision-tree-in-ai' },
    { title: 'Usefullness of DT', path: '/usefullness' },
  ]

  return (
    <>
      <div
        className={`${
          open ? 'w-[16%]' : 'w-fit'
        } hidden h-[95vh] sm:block fixed duration-300 bg-white border-r border-gray-200 dark:border-gray-600 p-3 dark:bg-slate-800 m-2  rounded-xl shadow-xl`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-8 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        

        <ul className='pt-2'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 pl-0 mt-2 text-base font-normal rounded-xl cursor-pointer dark:text-white hover:bg-gradient-to-r hover:from-[#f957b199] hover:to-[#ef714099] dark:hover:bg-gray-700
                 ${
                  location.pathname === menu.path &&
                  'bg-gradient-to-r from-[#f957b1cc] to-[#ef7140cc] text-white dark:bg-gray-700'
                }`}
              >
                <span className='text-[1rem]'>{menu.src}</span>
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
