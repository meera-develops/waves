const userTok = localStorage.getItem('access_token');
const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
    Authorization: 'Bearer ' + token
    }
});

// checks if user follows artist or another user
async function following() {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Bad or expired token
                
            } 
            else if (response.status === 403) {
                // Bad Oauth request
            }

            else if (response.status === 429) {
                // app exceeded limits
            } 
            else {
                // encountered unknown error
            }
        }

        let data = await response.json();

        localStorage.setItem('type', data.type);
        localStorage.setItem('user_id', data.id);
    } catch(err) {
        console.error()
    }
}

// checks if user unfollows artist or another user
async function unfollowing() {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Bad or expired token
                
            } 
            else if (response.status === 403) {
                // Bad Oauth request
            }

            else if (response.status === 429) {
                // app exceeded limits
            } 
            else {
                // encountered unknown error
            }
        }

        let data = await response.json();

        localStorage.setItem('type', data.type);
        localStorage.setItem('user_id', data.id);
    } catch(err) {
        console.error()
    }
}

// checks if user follows artist or another user
async function following() {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Bad or expired token
                
            } 
            else if (response.status === 403) {
                // Bad Oauth request
            }

            else if (response.status === 429) {
                // app exceeded limits
            } 
            else {
                // encountered unknown error
            }
        }

        let data = await response.json();

        localStorage.setItem('type', data.type);
        localStorage.setItem('user_id', data.id);
    } catch(err) {
        console.error()
    }
}

// checks if user unfollows artist or another user
async function unfollowing() {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Bad or expired token
                
            } 
            else if (response.status === 403) {
                // Bad Oauth request
            }

            else if (response.status === 429) {
                // app exceeded limits
            } 
            else {
                // encountered unknown error
            }
        }

        let data = await response.json();

        localStorage.setItem('type', data.type);
        localStorage.setItem('user_id', data.id);
    } catch(err) {
        console.error()
    }

}