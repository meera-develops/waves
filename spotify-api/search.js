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

async function search(q, type, martket, limit, offset, include_external) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/shuffle?q=${q}&type=${type}&market=${martket}&limit=${limit}&offset=${offset}&include_external=${include_external}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + userTok,
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            handleErrors(response);
        }
    } catch (err) {
        console.error(err);
    }
}