import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import { useLikePostMutation } from '@Redux/services/backendAPI';
import { useEffect, useState } from 'react';

import { PostType } from '@Redux/services/backendTypes';
import MainModal from '@components/MainModal/MainModal';
import PostComments from './PostComments';

export default function Post({
  text,
  likesNumber,
  img,
  isLiked,
  _id,
}: PostType) {
  const [likes, setIsLiked] = useState<any>({ likes: null, liked: null });
  const [isOpen, setIsOpen] = useState(false);

  const [trigger, { data, isSuccess }] = useLikePostMutation();

  useEffect(() => {
    setIsLiked({ likes: likesNumber, liked: isLiked });
  }, []);

  useEffect(() => {
    if (isSuccess && data)
      setIsLiked((prevState: any) => ({
        likes: data.liked ? ++prevState.likes : --prevState.likes,
        liked: data.liked,
      }));
  }, [isSuccess]);

  return (
    <>
      <div className="post">
        <div className="post__container--start">
          <div className="post__avatar">Av</div>
          <p>User</p>
        </div>
        <p className="post__text">{text}</p>
        <div className="post__content">{img ? img : ''}</div>
        <div className="post__container--space">
          <div className="post__container--end">
            <p className="post__text--number">{likes.likes}</p>

            <IconButton sx={{ padding: '0' }} onClick={() => trigger({ _id })}>
              <ThumbUpIcon
                sx={{
                  fill: likes.liked ? 'var(--primary)' : 'rgba(0, 0, 0, 0.54)',
                }}
              />
            </IconButton>
          </div>

          <div className="post__container--base">
            <p className="post__text--number">{likes.likes}</p>
            <IconButton sx={{ padding: '0' }} onClick={() => setIsOpen(true)}>
              <ChatBubbleIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <MainModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <PostComments text={text } img={img } />
      </MainModal>
    </>
  );
}
