import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://startup-2006d5c0-9ade-4123-b360-5c3567d9c2d8.vercel.app');
  }, [])

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  )
}

export default Home;