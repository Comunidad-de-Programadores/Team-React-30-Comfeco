import Swal from 'sweetalert2';

export const errorAlert = (error) => {
  Swal.fire({
    title: 'Que mal!',
    text: error.response.data.message[0].messages[0].message,
    icon: 'error',
    confirmButtonText: 'Aceptar',
  });
};

export const successAlert = (text) => {
  Swal.fire({
    title: 'Genial!',
    text,
    icon: 'success',
    confirmButtonText: 'Aceptar',
  });
};
