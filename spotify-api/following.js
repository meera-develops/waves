const userTok = localStorage.getItem('access_token');
const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
    Authorization: 'Bearer ' + token
    }
});

// function to handle errors
function handleErrors(response) {
    if (response.status === 401) {
        console.error('Bad or expired token');
    } else if (response.status === 403) {
        console.error('Bad OAuth request');
    } else if (response.status === 429) {
        console.error('Rate limit exceeded');
    } else {
        console.error('Unknown error occurred');
    }
}


// following artist or another user
async function followArtistOrUser(type, ids) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/following?type=${type}`, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + userTok,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: ids }) // ids should be an array of artist/user IDs
        });

        if (!response.ok) {
            handleErrors(response);
        }
    } catch (err) {
        console.error(err);
    }
}


//  unfollows artist or another user
async function unfollowArtistOrUser(type, ids) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/following?type=${type}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + userTok,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: ids }) // ids should be an array of artist/user IDs
        });

        if (!response.ok) {
            handleErrors(response);
        }
    } catch (err) {
        console.error(err);
    }
}


// checks if user follows artist or another user
async function isFollowing(type, ids) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/following/contains?type=${type}&ids=${ids.join(',')}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + userTok,
            }
        });

        if (!response.ok) {
            handleErrors(response);
        }

        const data = await response.json();
        return data; // returns an array of boolean values
    } catch (err) {
        console.error(err);
    }
}