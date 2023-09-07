// import Swal from 'sweetalert';
// import { storage } from './storage/Storage';

// export const show_alerta = (msj,icon) => {
//     Swal.fire({
//         title: msj,
//         icon: icon,
//         confirmButtonText: 'Aceptar'
//     })
    
// export const sendRequest = async (method,params, url, redir='', token=true) => {
//     if(token){
//         const authToken = storage.get('authToken');
//         axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
//     }
//     let res;
//     await axios({ method: method, data: params, url: url}).then(
//         response => {
//             res = response.data;
//             (method !== 'GET') ? show_alerta(response.data.message, 'success') :'',
//             setTimeout(() => {
//                 (redir !== '') ? window.location.href = redir : '', 2000);

//         }).catch( (errors) => {
//             let desc='';
//             res = errors.response.data;
//             errors.response.data.errors.map((e) => {desc = desc + '' + e })
//             show_alerta(desc, 'error');
//         });
//         return res;
// }   

// }
