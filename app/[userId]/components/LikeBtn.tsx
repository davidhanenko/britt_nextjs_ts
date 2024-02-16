'use client';

import { addLikeUserPage } from '@/app/actions';
import { useTransition } from 'react';

type LikeBthProps = {
  userId: string;
  likes: number;
};

export const LikeBth = ({
  userId,
  likes,
}: LikeBthProps) => {
  const [isPending, startTransition] = useTransition();

  const onAddLike = async () => {
    startTransition(async () => {
      await addLikeUserPage(userId, likes);
    });
  };
  return (
    <div className='relative'>
      <button
        className='bg-indigo-400 text-white px-2 py-1 rounded-md hover:shadow-md'
        onClick={() => onAddLike()}
        disabled={isPending}
      >
        💜 Like
      </button>

      <p className='absolute top-8'>
        {isPending && 'loading...'}
      </p>
    </div>
  );
};
