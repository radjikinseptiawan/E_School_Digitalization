/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
type ProfileButtonType = {
    types:"submit" | "undefined" | "reset" | "button" | undefined | any,
    sx:string,
    text:string,
    clicked:()=>void}
export default function ProfileEditButton({types,sx,text,clicked}:ProfileButtonType) {
  return (
                <>
                <button
                  type={types}
                  className={` ${sx} cursor-pointer font-bold text-white rounded-md`}
                  onClick={clicked}
                >
                  {text}
                </button>
                </>
  )
}
