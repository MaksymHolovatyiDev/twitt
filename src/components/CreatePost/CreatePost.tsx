import { TextareaAutosize } from '@mui/base';
import { Button } from '@mui/material';
import { setIsOpenType } from '@Types';
import { styles } from './CreatePost.styles.mui';
import { useCreatePostsMutation } from '@Redux/services/backendAPI';
import { useEffect } from 'react';

export default function CreatePost({ setIsOpen }: setIsOpenType) {
  const [trigger, { isSuccess }]: any = useCreatePostsMutation();

  useEffect(() => {
    if (isSuccess) setIsOpen(false);
  }, [isSuccess]);

  const onFormSubmit = (evt: any) => {
    evt.preventDefault();

    trigger({ text: evt.target.formText.value });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <p className="create-post__text">What's new?</p>

      <TextareaAutosize
        minLength={1}
        id="formText"
        className="create-post__input"
      />

      <div className="create-post__container--column">
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
