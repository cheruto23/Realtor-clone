import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import {db} from "../Firebase"
import { doc,setDoc, serverTimestamp, getDoc } from "firebase/firestore";

export default function OAuth() {

    const navigate = useNavigate();

    async function onGoogleClick(){
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const results = await signInWithPopup(auth,provider)
            const user = results.user
            
            //check for the user
            const docRef =doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            
            if(!docSnap.exists()){
                await setDoc(docRef,{
                    name:user.displayName,
                    email:user.email,
                    timestamp: serverTimestamp(),
                })
                navigate("/")
            }
        } catch (error) {
            toast.error("Could not authorize with google")
        }
    };
  return (
    <button type='button' onClick={onGoogleClick} className='flex items-center justify-center w-full
    bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium
     hover:bg-red-800 active:bg-red-900 shadow-md hover:lg
      active:shadow-lg hover:lg transition duration-150 ease-in-out rounded'>
      <FcGoogle className='text-2xl bg-white rounded-full mr-2' /> 
      Continue with Google
    </button>
  )
}
