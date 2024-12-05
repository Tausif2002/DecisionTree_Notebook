import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PreviousButton = ({path}) => {
    const navigate = useNavigate();
    return (
      <div className='flex items-center justify-center my-6'>
          <button type='button' className='bg-gradient-to-r from-[#AA53F1] to-[#D9297C] hover:bg-gradient-to-r hover:from-[#d9297c] hover:to-[#aa53f1] text-white rounded-3xl px-4 py-[5px]' onClick={()=>navigate(path)}>
              Previous
          </button>
      </div>
      
    )
}
