import { UserProps } from '@/types/types';
import { UserCard } from './components/UserCard';

// get all users
async function getUsers() {
  try {
    const res = await fetch('http://localhost:4000/users', {
      cache: 'no-store',
    });
    const users = await res.json();

    return users;
  } catch (error) {
    throw new Error(
      'Something went wrong with data fetching.'
    );
  }
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className='p-8'>
      <header className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-indigo-600 font-bold'>
          Users
        </h1>
        <p className='text-lg text-stone-600'>
          Select a user to view more
        </p>
      </header>

      <div className='grid grid-cols-fill-275 gap-4 mt-8'>
        {users?.map((user: UserProps) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
