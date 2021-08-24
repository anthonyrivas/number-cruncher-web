const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

const game = {
  wins: 0,
  losses: 0,
  message: ''
}

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.post('/guess', (req, res) => {
  const rand = Math.floor(Math.random() * 5) + 1;
  if (rand === req.body.guess) {
    game.wins++
    game.message =  'Victory!'
  } else {
    game.losses++
    game.message =  'Fail!'
  }
  res.json(game);
})

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));