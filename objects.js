var playlist = {
  "My Bloody Valentine" : 'Sometimes',
  "Slowdive" : 'Alison'
}
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}