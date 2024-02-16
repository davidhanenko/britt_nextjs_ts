import Link from 'next/link';

import { LikeBth } from './components/LikeBtn';

// get user data by user id
async function getUser(userId: string) {
  try {
    const res = await fetch(
      `http://localhost:4000/users/${userId}`,
      { cache: 'no-store' }
    );
    const user = await res.json();
    return user;
  } catch (error) {
    throw new Error(
      'Something went wrong with data fetching.'
    );
  }
}

export default async function UserPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUser(params.userId);

  return (
    <main className='relative w-full h-screen px-4'>
      <Link className='p-12' href='/'>
        {'< Go Back'}
      </Link>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 '>
        <div className='border-2 border-indigo-500  rounded-xl p-6'>
          <h1 className='text-2xl text-indigo-800 font-bold border-b-2 border-b-slate-300 mb-4'>
            {user.name}
          </h1>
          <p className='italic'>{user.email}</p>
          <p>{user.username}</p>
        </div>
        <div className='flex gap-4 items-center mt-4'>
          <p className='text-xl'>{user.likes}</p>
          <LikeBth userId={user.id} likes={user.likes} />
        </div>
      </div>
    </main>
  );
}
