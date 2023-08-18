import { useState } from 'react';

import { TextareaAutosize } from '@mui/base';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { setIsOpenType } from '@Types';
import { styles } from './CreatePost.styles.mui';
import { useCreatePostsMutation } from '@Redux/services/backendAPI';

export default function CreatePost({ setIsOpen }: setIsOpenType) {
  const [image, setImage] = useState('');
  const [trigger]: any = useCreatePostsMutation();

  const onImageChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && evt.target.files[0]) {
      setImage(URL.createObjectURL(evt.target.files[0]));
    }
  };

  const onFormSubmit = (evt: any) => {
    evt.preventDefault();

    const body: any = {};

    body[evt.target[3]] = evt.target[3].value;

    console.log(body);

    trigger({ body });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <p className="create-post__text">What's new?</p>

      <TextareaAutosize
        minLength={1}
        id="form-text"
        className="create-post__input"
      />

      <div className="create-post__container--column">
        {image && (
          <div className="create-post__container--relative">
            <IconButton sx={styles.icoBtn} onClick={() => setImage('')}>
              <CloseIcon />
            </IconButton>

            <img src={image} alt="your image" className="create-post__image" />
          </div>
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

        <div className="create-post__container--row">
          <Button sx={styles.addBtn} type="submit">
            Create post
          </Button>
          <Button sx={styles.closeBtn} onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </div>
    </form>
  );
}
