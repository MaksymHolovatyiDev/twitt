import { IconButton, TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function PostComments({ text }: any) {
  return (
    <>
      <div className="post__container--start">
        <div className="post__avatar">Av</div>
        <p>User</p>
      </div>
      <p className="post__text">{text}</p>

      <div className="comments">
        <ul className="comments__list">
          <li>
            <div className="comments__container">
              <div className="comments__container--start">
                <div className="comments__avatar">Av</div>
                <p className="comments__name">User</p>
              </div>

              <p>asfd</p>
            </div>
          </li>
          <li>
            <div className="comments__container">
              <div className="comments__container--start">
                <div className="post__avatar">Av</div>
                <p className="comments__name">User</p>
              </div>

              <p>asfd</p>
            </div>
          </li>
          <li>
            <div className="comments__container">
              <div className="comments__container--start">
                <div className="post__avatar">Av</div>
                <p>User</p>
              </div>

              <p>asfd</p>
            </div>
          </li>
        </ul>
        <form className="comments__container--base">
          <TextareaAutosize id="comment" className="comments__input" />
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
