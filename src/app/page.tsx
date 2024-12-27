import { LogIn } from '@/pages/LogIn';
import {OnBoarding} from '../pages/OnBoarding'
import { SignUp } from '@/pages/SignUp';

export default function Home() {
  return (
   <div className='w-full p-10 overflow-hidden h-screen bg-[#0C0B10]'>
        {/* <OnBoarding /> */}
        <LogIn />
   </div>
  );
}
