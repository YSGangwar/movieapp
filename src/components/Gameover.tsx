import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../data/Animation - 1721813459789.json';
import timeDifference from '../utils/calculateTIme';import { TimeToLeaveRounded } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
;
const GameOver = ({counts, time }) => {
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
        onClick={()=><Navigate  to="/"/>}
        className='border-2 p-4 text-xl bg-red-600 border-black hover:scale-105 duration-300'
      > Play again </button>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default GameOver;
