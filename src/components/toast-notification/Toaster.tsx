import { Toaster,  ToastBar } from 'react-hot-toast';

export const ToasterProvider = () => (
  <Toaster
    gutter={10}
    toastOptions={{
      className: '',
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      success: {
        iconTheme: {
          primary: 'rgb(6,122,88,100%)',
          secondary: 'white',
        },
        style: {
          background: 'rgb(6,122,88,5%)',
          color: 'rgb(6,122,88,100%)',
          border: '1px solid rgb(6,122,88,80%)',
        },
      },
      error: {
        iconTheme: {
          primary: 'rgb(199,58,58,100%)',
          secondary: 'white',
        },
        style: {
          background: 'rgb(199,58,58,10%)',
          color: 'rgb(199,58,58,100%)',
          border: '1px solid rgb(199,58,58,20%)',
        },
      },
    }}
  />
);

