import Swal from 'sweetalert2';
import { TabsetConfig } from 'ngx-bootstrap/tabs';

export const AlertMessage = (title, position, icon) => {
  Swal.fire({
    position: position,
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1000,
  });
};
export const SetItem = (key: string, payload: any) => {
  localStorage.setItem(key, JSON.stringify(payload));
};
export const RemoveItem = (key: string) => {
  localStorage.removeItem(key);
};
export const LocalgetItem = (key: string) => {
  return localStorage.getItem(key);
};
export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), {
    type: 'tabs',
    isKeysAllowed: false,
  });
}
export const getToken = () =>{
  let auth_token = JSON.parse(LocalgetItem("users"))
  return auth_token._token
}

export const removeNumberFormat = (value: string) => {
  return value.replace(/[0-9]/g, ' ');
}

export const truncate = (str:string, no_words:number) => {
  return str.split(" ").splice(0,no_words).join(" ");
}
