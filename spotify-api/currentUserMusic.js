async function reviewRecs() {
    let recs = [];
    let offset = 0;
    const limit = 10;
    while (recs.length <= 5) {
        recs.append(getUserTopSongs(recs, offset))
        offset += limit;
    }
}

async function getUserTopSongs(offset) {
    try {
        let limit = 10;
        const token = localStorage.getItem('access_token');

        // Retrieve current users top 10 songs
        const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}`, {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                //unauthorized
            } else {
            }
        } 
        // if id is not in database (review),
        // add to ret array
        
    } catch (err) {
        
    }



    // if 5 or more songs in the users top 10 songs are already reviewed, remove them from the list
    // pull up the next 10

    // continue until there are at least 5 top songs
}

