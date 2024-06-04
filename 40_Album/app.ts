// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    // Check if tracks parameter is provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Make three dictionaries representing different albums
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12); // With number of tracks
const album3 = make_album("Artist3", "Album Title 3");

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
