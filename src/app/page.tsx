import { LogIn } from '@/pages/login/page';
import {OnBoarding} from '../pages/onboarding/page'
import { Market } from '@/components/MarketComponent';
import { Deploy } from '@/pages/deposite/page';


export default function Home() {
  return (
   <div className='w-full p-4 overflow-hidden h-screen bg-zinc-950 flex '>
        <OnBoarding />
        {/* <Market/> */}
        {/* <Deploy/> */}
   </div>
  );
}
