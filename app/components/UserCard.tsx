'use client';

import Link from 'next/link';
import { useTransition } from 'react';

import { UserProps } from '@/types/types';
import { addLikeMainPage } from '../actions';

export const UserCard = ({ user }: { user: UserProps }) => {
  const [isPending, startTransition] = useTransition();

  const onAddLike = () => {
    startTransition(async () => {
      addLikeMainPage(user.id, user.likes);
    });
  };

  return (
    <div className='border-2 border-slate-300 p-4 rounded-md flex flex-col items-center'>
      <h2 className='text-xl font-semibold text-slate-600'>
        {user.name}
      </h2>

      <div className='flex gap-4 items-center justify-between mt-4  w-full'>
        <div className='flex gap-2 items-center h-fit relative'>
          <p>{user.likes}</p>
          <button
            onClick={() => onAddLike()}
            className='bg-indigo-400 text-white px-2 py-1 rounded-md hover:shadow-md'
            disabled={isPending}
          >
            💜 Like
          </button>
          <p className='absolute left-full'>
            {isPending && 'loading...'}
          </p>
        </div>
        <Link
          href={`/${user.id}`}
          className='text-indigo-700 font-bold border border-indigo-400 py-1 px-2 rounded-md hover:shadow-md'
        >
          View
        </Link>
      </div>
    </div>
  );
};
