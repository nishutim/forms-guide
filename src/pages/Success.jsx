import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
import ReactConfetti from "react-confetti";

const Success = () => {
   const [peaces, setPeaces] = useState(200);

   const location = useLocation();
   const { name, email } = location.state;

   useEffect(() => {
      setTimeout(() => setPeaces(0), 2000);
   }, []);

   return (
      <m.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="flex-auto flex justify-center items-center">
         <div className='bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16'>
            <h1 className='text-3xl pb-4 font-latoBold'>
               Thanks for the email, {name}✨
            </h1>
            <p className='text-lg text-gray-500'>
               We have sent your email over at {email}. We will
               get back to you as soon as we can!
            </p>
         </div>
         <ReactConfetti gravity={0.2} numberOfPieces={peaces} />
      </m.main>
   );
}

export default Success;