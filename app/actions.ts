'use server';

import { revalidatePath } from 'next/cache';

// Function to update likes on the main page.
export async function addLikeMainPage(
  id: string,
  likes: number
) {
  try {
    await fetch(`http://localhost:4000/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        likes: likes + 1,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // revalidate home page
    revalidatePath(`/`);
  } catch (error) {
    throw new Error(
      'Something went wrong with data updating.'
    );
  }
}

// Function to update user's likes on the user page.
export async function addLikeUserPage(
  id: string,
  likes: number
) {
  try {
    await fetch(`http://localhost:4000/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        likes: likes + 1,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // revalidate user page
    revalidatePath(`/${id}`);
  } catch (error) {
    throw new Error(
      'Something went wrong with data updating.'
    );
  }
}
