import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NextButton = ({path}) => {
    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center my-6'>
        <button type='button' className='bg-gradient-to-r from-[#5170FF] to-[#FF66C4] hover:bg-gradient-to-r hover:from-[#d9297c] hover:to-[#aa53f1] text-white rounded-3xl px-4 py-[5px]' onClick={()=>navigate(path)}>
            Next
        </button>
    </div>
    
  )
}
