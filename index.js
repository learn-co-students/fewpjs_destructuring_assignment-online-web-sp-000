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

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
// console.log(farmAnimals.split(" "))
let [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ")
moo = farmAnimals.split(" ")[0];

// neigh = farmAnimals.split(" ")[1];
// baa = farmAnimals.split(" ")[2];
// oink = farmAnimals.split(" ")[3];
// cluck = farmAnimals.split(" ")[4];

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.

const [Bessie, , Dolly, Babe, Little] = farmAnimals.split(" ")


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.

let [black_and_white, , black, pink, ] = farmAnimals.split(" ");

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

let [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

let [r, o, y, g, b, , v] = colors;

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.

let indg = colors[5]
// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names

// const muppet = {
//   name: 'Kermit',
//   color: 'green',
//   song: 'The Rainbow Connection',
//   job: 'Host of The Muppet Show',
//   partner: 'Miss Piggy'
// };

let name = muppet.name;
let color = muppet.color;
let song = muppet.song;
let job = muppet.job;
let partner = muppet.partner;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

// const k_muppet = {
//   k_name: 'Kermit',
//   k_color: 'green',
//   k_album: {
//     the_muppet_movie: {
//       song_1: 'Rainbow Connection',
//       song_2: 'Moving Right Along',
//       song_3: 'Never Before, Never Again',
//       song_4: 'I Hope That Something Better Comes Along',
//     },
//   },
//   k_job: 'Host of The Muppet Show',
//   k_partner: 'Miss Piggy'
// };

let song_2 = k_muppet.k_album.the_muppet_movie.song_2;
let song_4 = k_muppet.k_album.the_muppet_movie.song_4;
let k_job = k_muppet.k_job;
let k_partner = k_muppet.k_partner;
