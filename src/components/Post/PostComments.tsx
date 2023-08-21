import { IconButton, TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useCommentPostMutation } from '@Redux/services/backendAPI';
import { useEffect, useState } from 'react';
import { CommentRes } from '@Redux/services/backendTypes';
import { postCommentsType } from '@Types';

export default function PostComments({
  text,
  _id,
  comments: commentsData,
}: postCommentsType) {
  const [commentsList, setCommentsList] = useState<CommentRes[]>([]);
  const [comment, setComment] = useState('');

  const [trigger, { data, isSuccess }] = useCommentPostMutation();

  useEffect(() => {
    if (commentsData) setCommentsList(commentsData);
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      setCommentsList(prevState => [...prevState, data]);
      setComment('');
    }
  }, [isSuccess]);

  const onCommentChange = (evt: any) => {
    setComment(evt.target.value);
  };

  const onFormSubmit = (evt: any) => {
    evt.preventDefault();

    trigger({ text: comment, _id });
  };

  return (
    <>
      <p className="post__text">{text}</p>

      <div className="comments">
        <ul className="comments__list">
          {commentsList.map(el => (
            <li key={el._id}>
              <div className="comments__container">
                <div className="comments__container--start">
                  <div className="comments__avatar" />
                  <p className="comments__name">{el.name}</p>
                </div>

                <p>{el.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <form className="comments__container--base" onSubmit={onFormSubmit}>
          <TextareaAutosize
            id="comment"
            className="comments__input"
            value={comment}
            onChange={onCommentChange}
          />
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
