import { React, useState } from 'react';
import { EMAIL_ID } from '../root.link';
import { Table, Comment, Avatar } from 'antd';
import { columns, data } from '../TableData'

import firestore from '../Firebase'

const userRef = () => {
  firestore.collection('comment').get().then((결과)=>{
    결과.forEach((doc)=>{
      console.log(doc.data())
    })
  })
}

const Contact = () => {
  return (
    <section className='my-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <a href={`mailto: ${EMAIL_ID}`} className='border-b-2 mt-3 inline-block border-gray-500'>
              {EMAIL_ID}
            </a>
          </div>
        </div>

        <div className='bg-gray px-5 py-10 md:py-8 sm:p-20 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-12/12 '>
          <form className='flex flex-col space-y-3 m-auto w-full' name='contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />

            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' className='gradient' required></input>
            <label htmlFor='message'>Notice Board</label>
            <textarea name='message' id='message' cols='25' rows='5' className='gradient' required></textarea>
            <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md' onClick={userRef}>
              Submit
            </button>
          </form>
          <h2 className='m-3 bg-success'>Comment List</h2>
        <Comment
        author={<a>Han Solo</a>}
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully
              and efficiently.
            </p>
          }
        />
        </div>
      </div>
    </section>
  );
};

export default Contact;
