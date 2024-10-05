
// name, followers, id
export async function getUser(access_token, refresh_token) {
    try {
        //const token = localStorage.getItem('access_token');
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
            Authorization: 'Bearer ' + access_token
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                // log out
                throw new Error(401);
                
            } else if (response.status === 429) {
                // too many requests
                throw new Error(402);

            } else {
                // encountered unknown error
                throw new Error(400);

            }
        }

        let data = await response.json();

        //localStorage.setItem('user_id', data.id);
        //save usr
        await saveUser(access_token, refresh_token, data);


        return data;
    } catch(err) {
        console.error(err)
    }

}

export async function saveUser(accessTok, refreshTok, user) {
    const saveUser = await fetch('http://localhost:5000/auth-spotify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh_token: refreshTok,
            access_token: accessTok,
            spotifyId: user.id,
            displayName: user.display_name,
            uri: user.uri,
        }),
    });

    if (!saveUser.ok) {
        throw new Error('Error saving user');
    }
}

