import { userLogin } from '../spotify-api/auth.js';

export async function userLogin() {
    try {
      const response = userLogin();  
    } catch (err) {
        console.error('Error occured when logging user in: ', err);
    }
}