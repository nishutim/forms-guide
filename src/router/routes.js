import * as RouteNames from './routeNames';
import Registration from '../pages/Registration';
import Success from '../pages/Success';

const routes = [
   {
      path: RouteNames.REGISTRATION,
      Component: Registration
   },
   {
      path: RouteNames.SUCCESS,
      Component: Success
   }
]

export default routes;