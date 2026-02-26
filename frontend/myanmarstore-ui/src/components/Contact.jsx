import React from 'react'
import PageTitle from './PageTitle';
import { Form } from 'react-router-dom';
import apiClient from "../api/apiClient"
import { useActionData,useNavigation,useSubmit } from 'react-router-dom';
import { useEffect,useRef } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const actionData = useActionData();
  const fromRef =useRef(null);
  const navigation = useNavigation();
  const submit = useSubmit();
  const isSubmitting = navigation.state === "submitting";
  useEffect(()=>{
    if(actionData?.success){
      fromRef.current?.reset();
      toast.success("Your message has been submitted successfully!!!");
    }
  },[actionData]);

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userConfirmed = window.confirm(
      "Are you sure to submit this form data"
    );
    if(userConfirmed){
      const formData = new FormData(fromRef.current); //Get the form data
      submit(formData,{method:"POST"});
    }else {
      toast.info("Form Submission Cancelled!!!")
    }
  }
  return (
    <div className="max-w-[1152px] mx-auto">
      {/* Page Title */}
      <div className="max-w-2xl mx-auto pt-20 text-center text-center text-gray-600 dark:text-lighter flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-normalbg">
          Contact Us
        </h1>
        <p className="text-gray-500 mb-10 dark:text-normalbg">
          We'd love to hear from you! If you have any questions, feedback, or
          suggestions, please don't hesitate to reach out.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <Form ref={fromRef} method="POST" onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-normalbg">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
            className="w-full bg-white text-gray-800 placeholder-gray-400 
           border border-gray-300 rounded-md px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-normalbg">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-white text-gray-800 placeholder-gray-400 
           border border-gray-300 rounded-md px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-normalbg">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Your Mobile Number"
              className="w-full bg-white text-gray-800 placeholder-gray-400 
           border border-gray-300 rounded-md px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-normalbg">
              Message
            </label>
            <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
          className="w-full bg-white text-gray-800 placeholder-gray-400 
           border border-gray-300 rounded-md px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white font-medium py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              {isSubmitting?"Submitting": "Submit"}            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact

export async function saveContact({request,params}){
  const data = await request.formData();
  const contactData = {
    name:data.get("name"),
    email:data.get("email"),
    mobileNumber:data.get("mobileNumber"),
    message:data.get("message")
  };
  try{
    await apiClient.post("/contacts",contactData);
    return {success:"true"};
  } catch(error){
    throw new Response(
      error.message || "failed to submit your message. Please try again",
      {status:error.status || 500}
    )
  }
}