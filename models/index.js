const Playlist = require('./Playlist');
const Song = require('./Song');
const User = require('./User');

//Song belongs to Playlists
Song.belongsTo(Playlist,{
    foreignKey: 'playlist_id'
});

//Playlist has many songs
Playlist.hasMany(Song,{
    foreignKey:'playlist_id'
});

//Playlist belongs to User
Playlist.belongsTo(User,{
    foreignKey: 'Playlist_Name'
});

//User has many playlist
User.hasMany(Playlist,{
    foreignKey: 'Playlist_Name'
})