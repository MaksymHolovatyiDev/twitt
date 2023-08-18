import { IconButton, TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function PostComments({ text, img }: any) {
  return (
    <>
      <div className="post__container--start">
        <div className="post__avatar">Av</div>
        <p>User</p>
      </div>
      <p className="post__text">{text}</p>
      <div className="post__content">{img ? img : ''}</div>

      <div className="comments">
        <ul>
          <li>
            <div className="comments__container">
              <div className="comments__container--start">
                <div className="post__avatar">Av</div>
                <p>User</p>
              </div>

              <p>asfd</p>
            </div>
          </li>
          <p>asfd</p>
          <p>asfd</p>
          <p>asfd</p>
          <p>asfd</p>
          <p>asfd</p>
        </ul>
        <form className="comments__container--base">
          <TextareaAutosize className="comments__input" />
          <IconButton
            className="comments__container--base"
            sx={{ padding: '0' }}
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </>
  );
}
