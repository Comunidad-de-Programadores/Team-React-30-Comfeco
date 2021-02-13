import * as yup from 'yup';

export const signInSchema = yup.object().shape({
    email: yup
        .string()
        .email('Correo no válido')
        .required('El correo es obligatorio'),
    password: yup
        .string()
        .required('La contraseña es obligatoria')
});

export const signUpSchema = yup.object().shape({
    nick: yup
        .string()
        .required('El nick es obligatorio'),
    email: yup
        .string()
        .email('Correo no válido')
        .required('El correo es obligatorio'),
    password: yup
        .string()
        .required('La contraseña es obligatoria')
        .min(8, 'La contraseña debe tener 8 caracteres como mínimo')
        .matches(/.*[0-9].*/, 'La contraseña debe tener al menos un número')
        .matches(/.*[A-Z].*/, 'La contraseña debe tener al menos un caracter en mayuscula')
        .matches(/.*[a-z].*/, 'La contraseña debe tener al menos un caracter en minuscula'),
    passwordConfirmation: yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
});
