const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const playlistsRoutes = require('./routes/api/playlists');
const songsRoutes = require('./routes/api/songs');
const usersRoutes = require('./routes/api/userRoutes');

app.use('/api/playlists', playlistsRoutes);
app.use('/api/songs', songsRoutes);
app.use('/api/users', usersRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static("develop"))
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
