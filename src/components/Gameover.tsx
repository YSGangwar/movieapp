 // @ts-nocheck
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../data/Animation - 1721813459789.json';
import timeDifference from '../utils/calculateTIme';
import { Navigate } from 'react-router-dom';
;
const GameOver = ({counts, time ,clearStates}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const endTime = new Date();
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Game Over</h1>
      <h4> Total Clicks Taken :  {counts} </h4>
      <h4> Total Time Taken :{ timeDifference(endTime,time) } Seconds</h4>
      <button
        onClick={()=>window.location.reload()}
        className='border-2 p-4 text-sm mt-4  rounded-[22px] bg-orange-600 border-black hover:scale-105 duration-300'
      > Play again </button>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default GameOver;
