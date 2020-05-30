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
const farmAnimalsArray = farmAnimals.split(' ');

const [moo, neigh, baa, oink, cluck] = farmAnimalsArray;

const [Bessie, , Dolly, Babe, Little] = farmAnimalsArray;

const [black_and_white, , black, pink, ,] = farmAnimalsArray;

// Arrays

const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, i, v] = colors;
const [, , , , , indg, ,] = colors;
const { name, color, song, job, partner } = muppet;
const { song_1, song_2, song_3, song_4 } = k_muppet.k_album.the_muppet_movie;
const { k_job, k_partner } = k_muppet;
