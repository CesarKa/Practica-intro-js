/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }



const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const newPlaylist = {name: playlistName, songs: []};
    playlists = [...playlists, newPlaylist]
    return newPlaylist
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      const updatedPlaylists = playlists.filter(playlist => playlist.name !== playlistName);

      if (updatedPlaylists.length !== playlists.length) {
        playlists = updatedPlaylists;
        console.log(`Playlist "${playlistName}" eliminada con éxito.`);
      }
      return updatedPlaylists
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    let playlist = playlists.find((p) => p.name === playlistName);
    if (!playlist) throw new Error("Playlist not found");
    playlist.songs.push({ ...song, favorite: false });
    return playlist
  };
  
  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */

  const removeSongFromPlaylist = (playlistName, title) => {
    const playlistIndex = playlists.findIndex((p) => p.name === playlistName);
    if (playlistIndex === -1) throw new Error("Playlist not found");
    playlists = [...playlists];
    playlists[playlistIndex] = {
      ...playlists[playlistIndex],
      songs: playlists[playlistIndex].songs.filter((song) => song.title !== title)
    };
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {};

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {};

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

const newCatalogo = musicCatalog();
newCatalogo.createPlaylist('Gym');
newCatalogo.createPlaylist('Cas');
newCatalogo.createPlaylist('Tec');
//console.log(newCatalogo)

newCatalogo.getAllPlaylists();
console.log(newCatalogo.getAllPlaylists())

newCatalogo.removePlaylist('Cas');
console.log(newCatalogo.removePlaylist());





export default musicCatalog;