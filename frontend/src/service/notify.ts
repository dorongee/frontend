import { toast } from 'react-toastify';

export function notifyToast(
  text: string,
  type: 'error' | 'success' | 'info' | 'warning' | 'default'
) {
  toast(text, {
    hideProgressBar: true,
    autoClose: 2000,
    type,
  });
}
