import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  timer = 2000;
  // show sucess Message
  toastSuccess(title : string , message : string) {
    Swal.fire({
      title: `<h3 class='success'>${title}</h3>`,
      html: `<span class='msg-success'>${message}</span>`,
      width: '35%',
      heightAuto: false,
      background: '#80cbc4',
      position: 'top-right',
      icon: 'success',
      iconColor: '#388E3C',
      showConfirmButton: false,
      timer: this.timer,
      timerProgressBar: true,

      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
        toast.style;
      },
      showClass: {
        popup: 'animate__animated animate__fadeInRight',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown',

      },
    });
  }

  // show failed message
  toastFailure(title : string , message : string) {
    Swal.fire({
      title: `<h3 class='success'>${title}</h3>`,
      html: `<span class='error_message'>${message}</span>`,
      background: '#FF5722',
      position: 'top-right',
      width: '35%',
      icon: 'error',
      showConfirmButton: false,
      customClass: {
        icon: 'error_icon_color',
      },
      heightAuto: false,
      timer: this.timer,
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__fadeInRight',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  }


  //wearning

  toastWarning(title : string , message : string) {
    Swal.fire({
      title: `<h3 class='title'>${title}</h3>`,
      icon: 'info',
      html: `<span class='error-msg'>${message}</span>`,
      background: '#ff8a65',
      position: 'top-right',
      padding: '5px',
      width: '50%',
      showConfirmButton: false,
      customClass: {
        popup: 'swal-hauteur',
        icon: 'swal-error-icon',
      },
      heightAuto: false,
      timer: 1000,
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__fadeInRight',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  }
}
