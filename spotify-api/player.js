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

async function playback(device_id, context_uri = null, uris = null, offset = null, position_ms = 0) {
    try {
        const body = {};

        if (context_uri) {
            body.context_uri = context_uri; // Spotify URI of the context to play (playlist, album, etc.)
        }

        if (uris) {
            body.uris = uris; // Array of Spotify track URIs to play
        }

        if (offset) {
            body.offset = { position: offset }; // Offset for starting playback
        }

        if (position_ms) {
            body.position_ms = position_ms; // Starting position in the track (in milliseconds)
        }

        const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + userTok,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) // Pass the parameters in the request body
        });

        if (!response.ok) {
            handleErrors(response);
        }
    } catch (err) {
        console.error(err);
    }
}

// function to pause
async function pause(device_id) {
    const response = await fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + userTok,
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            handleErrors(response);
        }
}

// skip to next song (ONLY WORKS FOR USERS WITH SPOTIFY PREMIUM)
async function skipNext(device_id) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/next?type=${device_id}`, {
            method: 'PUT',
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

// skip to previous song (ONLY WORKS FOR USERS WITH SPOTIFY PREMIUM)
async function skipPrevious(device_id) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/previous?type=${device_id}`, {
            method: 'PUT',
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

// set repeat mode (ONLY WORKS FOR USERS WITH SPOTIFY PREMIUM)
async function repeat(state = 'context', device_id) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/repeat?state=${state}&device_id=${device_id}`, {
            method: 'PUT',
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

// volume
async function volume(volume_percent, device_id) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/repeat?volume_percent=${volume_percent}&device_id=${device_id}`, {
            method: 'PUT',
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

// shuffle music (ONLY FOR USERS WITH SPOTIFY PREMIUM)
async function shuffle(state, device_id) {
     try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/shuffle?state=${state}&device_id=${device_id}`, {
            method: 'PUT',
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