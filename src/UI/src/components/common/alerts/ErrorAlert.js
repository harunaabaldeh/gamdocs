import Swal from 'sweetalert2'

const ErrorDialog = (msg) => {
    Swal.fire({
        title: 'Error!',
        text: msg,
        icon: 'error',
        confirmButtonText: 'Close'
    })
}

export default ErrorDialog;