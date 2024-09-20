import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'

const ContactCard = ({ contact }) => {
  return (
    <div key={contact.id} className='bg-yellow-200 flex  justify-between items-center rounded-lg p-2'>
            
            <div className='flex gap-1'>
            <HiOutlineUserCircle  className='text-orange-500 text-3xl'/>
            <div className=' '>
              <h2 className='font-medium'>{contact.name}</h2>
              <p className='text-sm'>{contact.email}</p>
            </div>
            </div>

            <div className='flex text-2xl'>
              <RiEditCircleLine />
              <IoMdTrash className='text-orange-500'/>
            </div>
            
          </div>
  )
}

export default ContactCard