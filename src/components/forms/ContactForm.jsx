import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../validation/schema';
import { showToast } from '../../utils/toast';
import { toast } from 'react-toastify';

function ContactForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting},
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data) => {
    const toastId = showToast.sending();
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log("Form submitted:", data);

      showToast.messageSuccess();

      setTimeout(() => {
        reset();
        navigate('/');
      },5000);
      
    } catch (error) {
      console.error("Error sending form:", error);
      showToast.error();
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 md:w-96">
      <label className='flex flex-col w-full'>
        Full Name
        <input
          type="text"
          {...register('name')}
          autoComplete="name"
          className="border p-2 border-gray-500"
        />
        {errors.name && (
          <p className="text-red-800 error-message">{errors.name.message}</p>
        )}
      </label>
      <label className='flex flex-col w-full'>
        Email
        <input
          type="email"
          {...register('email')}
          autoComplete="email"
          className="border p-2 border-gray-500"
        />
        {errors.email && (
          <p className="text-red-800 error-message">{errors.email.message}</p>
        )}
      </label>
      <label className='flex flex-col w-full'>
        Subject
        <input
          list="subject-options"
          {...register('subject')}
          className="border p-2 border-gray-500"
        />
        <datalist id="subject-options">
          <option value="Product" />
          <option value="Feedback" />
          <option value="Checkout process" />
          <option value="Shipping" />
          <option value="Payment details" />
          <option value="Review" />
          <option value="Other" />
        </datalist>
        {errors.subject && (
          <p className="text-red-800 error-message">{errors.subject.message}</p>
        )}
      </label>
      <label className='flex flex-col w-full'>
        Message
        <textarea
          {...register('body')}
          rows={5}
          className="border p-2 border-gray-500"
        />
        {errors.body && (
          <p className="text-red-800 error-message">{errors.body.message}</p>
        )}
      </label>
      <button
        type="submit"
        className="bg-amber-950 text-white py-2 px-4 rounded hover:bg-amber-700 transition-all ease-in-out duration-150"
        disabled={isSubmitting}
      > {isSubmitting ? 'Sending message...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
