import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {FiSearch} from "react-icons/fi"
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect } from 'react';
import {collection,getDocs} from 'firebase/firestore';
import { db } from './config/firebase';

import ContactCard from './components/ContactCard';
import Model from './components/Model';


const App = () => {

  const [contacts,setContacts] = useState([]);

  const [isOpen,setOpen]=useState(false);

  const onOpen = () =>{
    setOpen(true)
  }

  const onClose = () =>{
    setOpen(close)
  }

  useEffect(() => {
    const getContacts = async () =>{

      try{
        const contactsRef = collection(db,"contacts");
        const contactsSnapshots = await getDocs(contactsRef);
        const contactLists = contactsSnapshots.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error)
      }
    }
    getContacts();
  })


  return (
    <>
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />

    <div className='flex gap-2'>

      <div className='flex relative  items-center flex-grow gap-2'>
        <FiSearch className='text-white text-3xl absolute ml-1'/>

        <input type="text" className='flex-grow h-10 border bg-transparent border-white rounded-md text-white pl-9' />
        
  
          <FaCirclePlus  onClick={onOpen} className="text-4xl text-white cursor-pointer" />
      

        </div>
      </div>

      <div className='mt-4 flex flex-col gap-3 '>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ) )}
      </div>
        
      
    </div>
    <Model isOpen={isOpen} onClose={onClose} >  </Model>
    </>
  );
};

export default App