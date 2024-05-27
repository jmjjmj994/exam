import { toast, ToastPosition } from "react-hot-toast";
export const errorToast = (message:string, position: ToastPosition | undefined) => toast.error(message, {
        duration:2000,
        position:position
    });
  
    export const successToast = (message:string, position: ToastPosition | undefined) => toast.success(message, {
        duration:2000,
        position:position
    });
  