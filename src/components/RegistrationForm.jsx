import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import formImg from '../assets/form.png';

const RegistrationForm = React.memo(({ onSubmit }) => {
   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         country: 'United Kingdom',
         terms: false
      },
      validationSchema: Yup.object({
         name: Yup.string().max(20, 'Name must be 20 characters or less').required('Name is required'),
         email: Yup.string().email('Invalid email address').required('Email is required'),
         terms: Yup.bool().oneOf([true], 'Terms of service must be checked')
      }),
      onSubmit: (values) => {
         onSubmit(values);
      }
   });

   return (
      <form onSubmit={formik.handleSubmit} className="flex bg-white w-1/2 rounded-lg font-latoRegular">
         <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoBold">Let's get started 👋</h1>
            <p className="text-lg text-gray-500">
               Join our E-learning platform today and unlock over 500+ courses
               and digital assets ready to download.
            </p>
            <div className="mt-6">
               <div className="pb-4">
                  <label
                     className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name && 'text-red-500'}`}
                     htmlFor="name"
                  >
                     {formik.touched.name && formik.errors.name ? `${formik.errors.name}` : 'Name'}
                  </label>
                  <input
                     className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                     type="text"
                     id="name"
                     name="name"
                     value={formik.values.name}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     placeholder="Enter your name" />
               </div>
               <div className="pb-4">
                  <label
                     className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email && 'text-red-500'}`}
                     htmlFor="email"
                  >
                     {formik.touched.email && formik.errors.email ? `${formik.errors.email}` : 'Email'}
                  </label>
                  <input
                     className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                     type="email"
                     id="email"
                     name="email"
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     placeholder="Enter your email" />
               </div>
               <div className="pb-4">
                  <label
                     className={`block font-latoBold text-sm pb-2`}
                     htmlFor="country"
                  >
                     Country
                  </label>
                  <select
                     className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                     id="country"
                     name="country"
                     value={formik.values.country}
                     onChange={formik.handleChange}
                  >
                     <option>United Kingdom</option>
                     <option>United States</option>
                     <option>Germany</option>
                     <option>Norway</option>
                  </select>
               </div>
               <div className="pb-4">
                  <label
                     className={`block font-latoBold text-sm pb-2 hover:cursor-pointer ${formik.touched.terms && formik.errors.terms && 'text-red-500'}`}
                     htmlFor="terms"
                  >
                     {formik.touched.terms && formik.errors.terms ? `${formik.errors.terms}` : 'Terms of service'}
                  </label>
                  <div className="flex items-center gap-2">
                     <input
                        className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formik.values.terms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                     <p className='text-sm font-latoBold text-gray-500'>
                        I agree to the Terms and Service that my data will be taken
                     </p>
                  </div>
               </div>
               <button
                  className='bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full focus:outline-transparent hover:bg-teal-600 focus:bg-teal-600'
                  type='submit'
               >
                  Start learning today!
               </button>
            </div>
         </div>
         <div className='relative flex-1'>
            <img className='absolute top-0 left-0 w-full h-full object-cover rounded-lg' src={formImg} alt="form-learn" />
         </div>
      </form>
   );
});

export default RegistrationForm; 