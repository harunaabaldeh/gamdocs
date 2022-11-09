import Swal from 'sweetalert2'
const SuccessAlert =(text)=>{
  Swal.fire({
      title: "Success!",
      text: text,
      icon: "success",
      confirmButtonText: "Great!",
      timer: 1000,
  });
}
export default SuccessAlert;