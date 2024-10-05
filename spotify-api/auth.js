<<<<<<< HEAD
import { client_id, redirect_uri } from '@env';
const clientId = client_id;
const redirectURI = redirect_uri
=======

import { client_id } from '@env';

const clientId = client_id;
const redirectURI = 'http://localhost:8081/'
>>>>>>> 566e7ca (Commiting json)
const authURL = new URL('https://accounts.spotify.com/authorize')

const scope = 'user-read-private user-read-email';

// PKCE standard for protecting the authorization code in mobile apps
// https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
async function PKCE_func() {
    const generateRandomString = (length) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc, x) => acc + possible[x % possible.length], "");
      }
      
    const codeVerifier  = generateRandomString(64);

    const sha256 = async (plain) => {
        const encoder = new TextEncoder()
        const data = encoder.encode(plain)
        return window.crypto.subtle.digest('SHA-256', data)
    }

    const base64encode = (input) => {
        return btoa(String.fromCharCode(...new Uint8Array(input)))
          .replace(/=/g, '')
          .replace(/\+/g, '-')
          .replace(/\//g, '_');
    }

<<<<<<< HEAD
    const hashed = await sha256(codeVerifier)
=======
    const hashed = sha256(codeVerifier)
>>>>>>> 566e7ca (Commiting json)
    const codeChallenge = base64encode(hashed);


    window.localStorage.setItem('code_verifier', codeVerifier);

    return codeChallenge;
}

<<<<<<< HEAD
async function redirectToSpotify(codeChallenge) {
=======
async function getAuthCode(codeChallenge) {
>>>>>>> 566e7ca (Commiting json)
    try {
        const params = {
            response_type: 'code',
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectURI,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge
        };
        authURL.search = new URLSearchParams(params).toString();
        window.location.href = authURL.toString();

<<<<<<< HEAD
    } catch(err) {
        console.error('Failed to get redirect to Spotify. ', err);
    }
}

export async function getAuthCode() {
    try {
        const UrlParams = new URLSearchParams(window.location.search);
        let code = UrlParams.get('code');
=======
        constUrlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get('code');
>>>>>>> 566e7ca (Commiting json)

        return code;

    } catch (err) {
        console.error('Failed to get authorization code. ', err);
    }
}

<<<<<<< HEAD
export async function getAccessToken(code) {
    try {
        let codeVerifier = localStorage.getItem('code_verifier');

        const response = await fetch('https://accounts.spotify.com/api/token',{
=======
async function getAccessToken(code) {
    try {
        let codeVerifier = localStorage.getItem('code_verifier');

        const body = await fetch ({
>>>>>>> 566e7ca (Commiting json)
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: clientId,
                grant_type: 'authorization_code',
                code,
                redirect_uri: redirectURI,
                code_verifier: codeVerifier
            }),
        });

<<<<<<< HEAD
        let data = await response.json();

        if (data.error) {
            throw new Error('Invalid credentials');
        }

        return data.access_token;
=======
        const response = await body.json();
        return response.access_token;
>>>>>>> 566e7ca (Commiting json)
    } catch (err) {
        console.error('Access token could not be retrieved.', err)
    }
}

<<<<<<< HEAD
export default async function userLogin() {

    const codeChallenge = await PKCE_func();

    redirectToSpotify(codeChallenge);
=======
export async function userLogin() {

    const codeChallenge = PKCE_func();

    let code = await getAuthCode(codeChallenge);

    let token = await getAccessToken(code);

    localStorage.setItem('access_token', token);
      
    const data = await response.json();
    console.log(data);
>>>>>>> 566e7ca (Commiting json)
}


