// app/page.tsx
import Navabar from './components/Navabar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Progress from './components/Progress';

export default function Page() {
  return (
<main className='p-4'>
    <Navabar/>
<div className='h-[40rem] flex items-center justify-center'>
    
    <div className=' '>
       <Hero/>
    </div>



    </div>
    <div className='flex mt-96 justify-center'>
  <Progress/>

  </div>
 
 
 
  <Footer/>
</main>

  



  )
}