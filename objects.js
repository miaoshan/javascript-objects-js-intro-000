var playlist={'Robbie Willams': "Rock DJ ",

            'Adam Levine': "Purple Rain"};

function updatePlaylist(playlist, artist, songTitle){

  return Object.assign({}, playlist, {[artist]:songTitle})
}
