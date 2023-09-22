"use client"
import { Button } from '@nextui-org/button'
import { Saira_Extra_Condensed } from 'next/font/google';
import React, { useEffect, useState } from 'react'

// funktion der App Timer logik

function LogicButton() {
  const PomodoroTimer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActiv, setIsActiv] = useState(false);



    useEffect(() => {
      let interval: any

   
    

      if (isActiv && minutes >= 0 && seconds >= 0) {
        interval = setInterval(() => {
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);

              

            } else {
              setMinutes(minutes - 1);
              setSeconds(59);
            }
          } else {
            setSeconds(seconds - 1);
          }
        }, 1000);
      } else {
        clearInterval(interval);
      }

      return () => {
        clearInterval(interval);
      };
    }, [isActiv, minutes, seconds]);

    const toggleTimer = () => {
      setIsActiv(!isActiv);
    };
    const resetTimer = () => {
   
      setMinutes(25);
      setSeconds(0);
      setIsActiv(false);
    }
 
  
    return (
      <main className=''>
        <div className='mb-5 flex justify-center gap-2'>
          <Button className='' color='primary' variant='ghost'  onClick={resetTimer}>Reset</Button> 
        
        </div>
      <div className='flex flex-col items-center borde justify-center gap-5 '>
    
       
        <div className='text-8xl  '>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds} 
        </div>
        <Button className='w-64 '  color='primary' onClick={toggleTimer}>{isActiv ? "Stop" : "Start"}</Button>
        
      </div>

    </main>
      
    );
  };

  return <PomodoroTimer />;
}

export default LogicButton;