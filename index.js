const farmAnimals = 'cow horse sheep pig chicken'

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
const [Bessie, , Dolly, Babe, Little] = farmAnimals.split(' ');
const [black_and_white, , black, pink, ] = farmAnimals.split(' ');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, , v] = colors;
const [ , , , , , indg, ] = colors;



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

const {name, color, song, job, partner} = muppet;
const {k_color, k_job, k_partner} = k_muppet;
const {song_2, song_4} = k_muppet.k_album.the_muppet_movie;

// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
