import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await currentUser();

  const profileInfo = null;

  if(user && !profileInfo?._id) {
    redirect('/onboard');
  }

  return (
    <div>
      {user ? (
        <div>Welcome, {user.firstName}!</div>
      ) : (
        <div>Please log in to access your account.</div>
      )}
    </div>
  );
}
