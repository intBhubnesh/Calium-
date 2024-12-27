import { LogIn } from '@/pages/LogIn';
import {OnBoarding} from '../pages/OnBoarding'
import { SignUp } from '@/pages/SignUp';
import { NavBar } from '@/components/NavBar';
import { Market } from '@/components/Market';

export default function Home() {
  return (
   <div className='w-full p-4 overflow-hidden h-screen bg-zinc-950 flex '>
        {/* <OnBoarding /> */}
        {/* <LogIn /> */}
        <NavBar />
        <Market />
   </div>
  );
}
