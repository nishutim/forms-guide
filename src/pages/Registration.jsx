import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import * as RouteNames from '../router/routeNames';
import RegistrationForm from "../components/RegistrationForm";

const Registration = () => {
   const navigate = useNavigate();

   const handleSubmit = useCallback((values) => {
      console.log(values);
      navigate(RouteNames.SUCCESS, { state: values });
   }, []);

   return (
      <m.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="flex-auto flex justify-center items-center"
      >
         <RegistrationForm
            onSubmit={handleSubmit} />
      </m.main>
   );
}

export default Registration;