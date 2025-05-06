import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your full name')
    .min(3, 'Your full name must include at least 3 characters')
    .matches(
      /^[A-Za-z]+(?: [A-Za-z]+)+$/,
      'Your full name must include a first name and a last name, with a space between'
    ),
  subject: yup
    .string()
    .required('Please enter a valid subject matter')
    .min(3, 'The subject must be at least 3 characters')
    .matches(/^[A-Za-z ]+$/, 'Enter a subject using only letters'),
  email: yup
    .string()
    .required('Please enter a valid email address')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Your email must include an '@' and be a valid email address. No special characters are allowed"
    ),
  body: yup
    .string()
    .required('Please enter a message to contact us')
    .min(3, 'Your message must be at least 3 characters')
    .max(100, 'Message cannot exeed 100 characters')
    .matches(
        /^[A-Za-z0-9 .,!?'"()\[\]\-]+$/,
      'Please enter a valid message '
    ),
});
