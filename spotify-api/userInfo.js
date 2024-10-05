const userTok = localStorage.getItem('access_token');
const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
    Authorization: 'Bearer ' + token
    }
});

// name, followers, id
async function getUser() {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                // log out
                
            } else if (response.status === 429) {
                // too many requests
            } else {
                // encountered unknown error
            }
        }

        let data = await response.json();

        localStorage.setItem('user_id', data.id);
    } catch(err) {
        console.error()
    }

}