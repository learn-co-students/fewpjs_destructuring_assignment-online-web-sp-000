const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

// Strings

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
const [Bessie, , Dolly, Babe, Little] = farmAnimals.split(' ')
const [black_and_white, , black, pink, ] = farmAnimals.split(' ')

// Arrays

const [red,orange,yellow,green,blue,indigo,violet] = colors
const [r,o,y,g,b, ,v] = colors
const [,,,,,indg,] = colors

// Objects

const { name, color, song, job, partner } = muppet;
const { k_album: { the_muppet_movie: {song_2: song_2, song_4: song_4}}, k_job: k_job, k_partner: k_partner } = k_muppet;
