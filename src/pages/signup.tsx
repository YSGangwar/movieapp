import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
type FormFields = {
    email:string
    password:string
}

export const Signup = () => {
    const {register , handleSubmit ,setError ,formState:{errors , isSubmitting}} = useForm<FormFields>();
    const onSubmit :SubmitHandler<FormFields> = async(data) =>{
        try {
            await new Promise((resolve)=>setTimeout(resolve,1000));
            // throw new Error(); 
            console.log(data);
        } catch (error) {
            setError("email",{
                message:"email already Exists"
            })
        }
        
    }
  return (
    <div className="bg-black/50">
      <div className='container mx-auto  flex items-center h-screen '>
        <div className='mx-auto flex h-[550px]  w-[1140px]  overflow-hidden shadow-black shadow-2xl rounded-lg'>
          <div className='flex flex-row h-full w-1/2 justify-center items-center  bg-cover bg-no-repeat signup '>
          <div className='flex justify-center space-x-4 items-end h-full mb-20 md:w-[75%] my-6'>
          <FaFacebookSquare  size={20} className='fill-white' />
          <FaInstagram size={20} className='fill-white'/>
          <FaTwitterSquare size={20} className='fill-white'/>
          <FaGithubSquare size={20} className='fill-white'/>
          <FaDribbbleSquare size={20} className='fill-white' />
          </div>
          </div>
          <div className='flex flex-row h-full w-1/2 overflow-y-auto  justify-center bg-white'>
            <div className='flex flex-col ml-2 mr-2 '>
              <h1 className='text-4xl mt-10  text-center mb-10'>S I G N - U P</h1>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 items-center'>
                
                <TextField
                  {...register("email",{
                    required:"email is Required",
                    pattern:{
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"email must be of  Proper Format "
                    }
                    }) 
                  }
                  error={!!errors.email}
                  id="outlined-error-helper-text"
                  label="Email"
                  type="email"
                  helperText={errors.email?.message}
                />

                <TextField 
                    {...register("password",{
                      required:"Password is Required",
                      minLength:{
                          value:8,
                          message:"password Sould Include Minimun 8 characters"
                      }
                    })}
                    error={!!errors.password}
                    id="outlined-error-helper-text"
                    label="Password"
                    type="password"
                    helperText={errors.password?.message}
                
                />
                <button 
                className='mt-10 bg-red-600 w-64 p-4 text-xl text-center rounded-[22px] shadow-lg shadow-black hover:scale-105 duration-300'
                disabled={isSubmitting} type="submit"> 
                {  isSubmitting ?" Loading..." :"Submit"}
                </button>
            </form>   
        
             </div>
            </div>
        </div>
        </div>
    </div>
  )
};