import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as RouteNames from './routeNames';
import routes from "./routes";
import Registration from "../pages/Registration";

const AppRouter = () => {
   const location = useLocation();

   return (
      <AnimatePresence mode="wait">
         <Routes key={location.pathname} location={location}>
            <Route path={RouteNames.HOME} element={<Registration />} />
            {routes.map(({ path, Component }) => (
               <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={RouteNames.HOME} element={<Navigate to={RouteNames.REGISTRATION} />} />
         </Routes>
      </AnimatePresence>
   );
}

export default AppRouter;