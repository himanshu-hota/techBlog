import React from 'react';
import { useFormInput } from './customHooks/formHook';
import { addData } from '../firebase';

import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  const handleSubmit = (e) => {

    e.preventDefault();

    const currTitle = title.value;
    const currsubTitle = subTitle.value;
    const currContent = content.value;

    if((currTitle !== '' && currsubTitle !== '') && currContent !== ''){
      addData(currTitle,currsubTitle,currContent);
      navigate('/');
      return;
    }else{
      alert('Please provide data');
    }
    
  }

  

  return (
    <div className='create-post'>
      <h1>Create Post</h1>
      <form action="/" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" {...title} />
        </div>

        <div className="form-field">
          <label htmlFor="subTitle">Sub Title</label>
          <input type="text" name="subTitle" id="subTitle" {...subTitle} />
        </div>

        <div className="form-field">
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content" cols="10" rows="5" placeholder='Enter your thoughts here!' {...content} ></textarea>
        </div>

        <button className="create-post-btn">Submit</button>

      </form>
    </div>
  )
}

export default CreatePost;