import { useState } from 'react';

import { TextareaAutosize } from '@mui/base';
import { Button } from '@mui/material';

export default function CreatePost() {
  const [image, setImage] = useState('');

  const onImageChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && evt.target.files[0]) {
      setImage(URL.createObjectURL(evt.target.files[0]));
    }
  };

  return (
    <>
      <Button>Close</Button>
      <p>Text</p>
      <TextareaAutosize minLength={1} className="create-post__input" />
      <div className="create-post__container">
        {image && (
          <img
            id="blah"
            src={image}
            alt="your image"
            className="create-post__image"
          />
        )}
        <Button variant="contained" component="label">
          Upload File
          <input
            type="file"
            hidden
            accept=".jpg, .jpeg, .png"
            onChange={onImageChange}
          />
        </Button>
        <Button>Create post</Button>
      </div>
    </>
  );
}
