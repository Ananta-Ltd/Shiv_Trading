import * as yup from "yup";

const passwordRules = /(?=.*[A-Z].{8,}$)/;
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z].{8,}$)/;

 export const userSchema = yup.object().shape({
    username: yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, {message: "Please create a stronger password"})
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),

})