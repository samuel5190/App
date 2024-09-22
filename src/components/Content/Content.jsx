import React, { useState } from 'react'
import './Content.css'
import { FcCancel } from 'react-icons/fc';
import { IoCloudUploadOutline } from 'react-icons/io5';

const Content = ({setTitle,setSubTitle,setStory,setPhoto,goal,setFile}) => {
  const [post, setPost] = useState();
  // const [word, setWord] = useState(setTitle);

  const showImg = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setFile(file)
    const img = URL.createObjectURL(file);
    setPost(img);
    setPhoto(img)
    console.log(img)
  };


  return (
    <div className='contentBody'>
      <div className='contentTitleBox'>
        <div className='titleTextBox'>
          <h3>Main details</h3>
          <div>Choose a title for your campaign.</div>
        </div>
        <div className='titleInputBox'>
          <div className='titleInput'>
            <div>
              Title<span>*</span>
            </div>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
          </div>
          <div className='titleInput'>
            Subtitle
            <input type="text" onChange={(e)=>setSubTitle(e.target.value)}/>
          </div>
        </div>
      </div>

      <div className='contentTitleBox'>
        <div className='titleTextBox'>
          <h3>Story</h3>
          <div>Add a story to your campaign.</div>
        </div>
        <div className='titleInputBox'>
          <div className='storyInput'>
            <div>
              Story<span>*</span>
            </div>
            {/* <input type="text" /> */}
            <textarea name="" id="" onChange={(e)=>setStory(e.target.value)}></textarea>
          </div>
        </div>
      </div>

      <div className='contentTitleBox'>
        <div className='titleTextBox'>
          <h3>Cover photo</h3>
          <div>Add a cover photo to your campaign.</div>
        </div>
        <div className='photoInputBox'>
          <div className='photoInput'>
            <div className='storyPhotoBox'>
              <div>
                Upload photo<span>*</span>
              </div>
                <div className='photoBox'>
                  <label htmlFor="1">
                    {post ? <img src={post} alt="pic" className="postImg" /> : <div className='uploadCircle'><IoCloudUploadOutline color='white' size={20} /></div>}
                    <input type="file" id="1" hidden onChange={showImg} />
                  </label>
                </div>
                <FcCancel onClick={()=>setPost("")}/>
            </div>
          </div>
        </div>
      </div>
      <div className="SaveBtnBox">
          <button className="goalSaveBtn" onClick={goal}>Next</button>
        </div>
      
    </div>
  )
}

export default Content;