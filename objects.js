var playlist = {
  "My Bloody Valentine" : 'Sometimes'
}
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}