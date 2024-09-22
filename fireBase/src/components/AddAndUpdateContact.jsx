import React from 'react'
import Model from './Model'
import { Field,Form, Formik } from 'formik'
import { db } from '../config/firebase'
import { doc,addDoc, collection,updateDoc} from "firebase/firestore";

const AddAndUpdateContact = ({isOpen, onClose , isUpdate ,contact }) => {

    const addContact =async(contact ) => {
        try{
            const contactRef = collection(db,"contacts");
            await addDoc(contactRef,contact);
            onClose();
        } catch(error) {
            console.log(error)
        }
    }

    const updateContact =async(contact ) => {
        try{
            const contactRef = doc(db,"contacts",id);
            await updateDoc(contactRef,contact);
            onClose();
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <Model isOpen={isOpen} onClose={onClose} > 
        <Formik
        initialValues={isUpdate ?{
            name: contact.name,
            email: contact.email,
        }:{
            name: "",
            email: "",
        }}
        onSubmit={(values) =>{
            isUpdate ? updateContact(values,contact.id) :
            addContact(values);
        }}
        >

            <Form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                <label htmlFor='"name'>
                    Name
                </label>
                <Field name="name" className="border h-10" />
                </div>

                <div className='flex flex-col gap-1'>
                <label htmlFor='"email'>
                    Email
                </label>
                <Field name="email" className="border h-10" />
                </div>

                <button className='bg-orange-300 px-3 py1.5 border self end'>
                    {isUpdate ? "update":"add"} contact
                </button>
            </Form>
        </Formik>
     </Model>
  )
}

export default AddAndUpdateContact