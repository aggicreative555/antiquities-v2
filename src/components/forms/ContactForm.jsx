import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../validation/schema';
import { showToast } from '../../utils/toast';
import { toast } from 'react-toastify';

function ContactForm() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data) => {
    const toastId = showToast.sending();
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log('Form submitted:', data);

      showToast.messageSuccess();

      setTimeout(() => {
        reset();
        navigate('/');
      }, 5000);
    } catch (error) {
      console.error('Error sending form:', error);
      showToast.error();
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <>
      <h1 className="uppercase font-garamond w-full text-center break-word max-w-[400px] md:max-w-[450px] mb-4 mt-8 text-red-800 text-3xl md:text-5xl">
        Would you like to send us a letter?
      </h1>
      <span className="h-[1px] w-2/4 bg-black m-[1px]"></span>
      <span className="h-[1px] w-2/4 bg-black m-[1px]"></span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-6 md:w-96 mt-10 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <label className="label-base group">
          Full Name
          <input
            type="text"
            {...register('name')}
            autoComplete="name"
            className="input-base border-b-[1px] hover:border-black hover:border-b-[2px] transition-all duration-200 ease-in-out focus:border-black focus:border focus:rounded-none focus:outline-1 focus:outline-offset-1 focus:outline-black"
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </label>
        <label className="label-base group">
          Email
          <input
            type="email"
            {...register('email')}
            autoComplete="email"
            className="input-base border-b-[1px] hover:border-black hover:border-b-[2px] transition-all duration-200 ease-in-out focus:border-black focus:border focus:rounded-none focus:outline-1 focus:outline-offset-1 focus:outline-black"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </label>
        <label className="label-base group">
          Subject
          <div className="relative">
            <select
              {...register('subject')}
              className="input-base border-0 pr-8 appearance-none w-full text-black font-caslon py-2 px-2 focus:border focus:rounded-none focus:outline-1 focus:outline-offset-1 focus:outline-black text-xs hover:bg-gray-100"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <option value="">Select a subject</option>
              <option value="Product" className="">
                Product
              </option>
              <option value="Feedback">Feedback</option>
              <option value="Checkout process">Checkout process</option>
              <option value="Shipping">Shipping</option>
              <option value="Payment details">Payment details</option>
              <option value="Review">Review</option>
              <option value="Other">Other</option>
            </select>
            <div className="p-4">
              <span
                className={`h-[1px] w-2 rounded-full absolute top-4 right-[14px] bg-black transition-transform duration-150 ${dropdownOpen ? '-rotate-45' : 'rotate-45 '}`}
              ></span>
              <span
                className={`h-[1px] w-2 rounded-full absolute top-4 right-[20px] bg-black -rotate-45 transition-transform duration-150 ${dropdownOpen ? 'rotate-45' : ''}`}
              ></span>
            </div>
          </div>
          {errors.subject && (
            <p className="error-message">{errors.subject.message}</p>
          )}
        </label>
        <label className="label-base group">
          Message
          <textarea
            {...register('body')}
            rows={5}
            className="input-base mt-4 border-b-[1px] hover:border-black border-l-[1px] hover:border-b-[2px] hover:border-l-[2px] transition-all duration-200 ease-in-out focus:border-black focus:border focus:rounded-none focus:outline-1 focus:outline-offset-1 focus:outline-black"
          />
          {errors.body && (
            <p className="error-message">{errors.body.message}</p>
          )}
        </label>
        <button
          type="submit"
          className="btn-l btn-primary disabled:bg-gray-100 disabled:text-gray-400"
          disabled={isSubmitting}
        >
          {' '}
          {isSubmitting ? 'Sending message...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}

export default ContactForm;
