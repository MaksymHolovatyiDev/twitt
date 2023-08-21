import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import { useLikePostMutation } from '@Redux/services/backendAPI';
import { useEffect, useState } from 'react';

import { PostType } from '@Redux/services/backendTypes';
import MainModal from '@components/MainModal/MainModal';
import PostComments from './PostComments';
import PostUser from './PostUser';
import { likesType } from '@Types';

export default function Post({
  text,
  likesNumber,
  isLiked,
  _id,
  name,
  commentsNumber,
  comments: commentsData,
}: PostType) {
  const [likes, setIsLiked] = useState<likesType>({ likes: null, liked: null });
  const [comments, setComments] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);

  const [trigger, { data, isSuccess }] = useLikePostMutation();

  useEffect(() => {
    setIsLiked({ likes: likesNumber, liked: isLiked });
    setComments(commentsNumber);
  }, []);

  useEffect(() => {
    if (isSuccess && data)
      setIsLiked((prevState: likesType) => ({
        likes: data.liked ? ++prevState.likes! : --prevState.likes!,
        liked: data.liked,
      }));
  }, [isSuccess]);

  return (
    <>
      <div className="post">
        <PostUser name={name} />
        <p className="post__text">{text}</p>
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
            <p className="post__text--number">{comments}</p>
            <IconButton sx={{ padding: '0' }} onClick={() => setIsOpen(true)}>
              <ChatBubbleIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <MainModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <PostUser name={name} />
        <PostComments text={text} _id={_id} comments={commentsData} />
      </MainModal>
    </>
  );
}
