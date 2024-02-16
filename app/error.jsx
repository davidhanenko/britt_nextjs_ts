'use client';

import Link from 'next/link';

export default function Error({ error }) {
  return (
    <div className='flex flex-col p-12'>
      <h1 className='text-3xl'>Error</h1>
      <p>{'Something went wrong, please try again'}</p>
      <Link
        className='border-2 border-slate-400 w-fit p-2 cursor-pointer mt-4 rounded-md'
        href='/'
      >
        Return to main page
      </Link>
    </div>
  );
}
