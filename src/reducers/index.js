const songsReducers = () => {
  return [
    { title: 'Numb', duration: '4:05' },
    { title: 'In the end', duration: '3:38' },
    { title: 'Californiacation', duration: '5:24' },
    { title: 'Hurt', duration: '4:24' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
