const farmAnimals = 'cow horse sheep pig chicken';

const [moo, neigh, baa, oink, cluck]  = farmAnimals.split(' ');
console.log(moo, neigh, baa, oink, cluck);

const [bessie, , dolly, babe, little]  = farmAnimals.split(' ');
console.log(bessie, dolly, babe, little);

const [blackAndWhite, , black, pink]  = farmAnimals.split(' ');
console.log(blackAndWhite, black, pink);

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(red, orange, yellow, green, blue, indigo, violet);

const [r, o, y, g, b, , v] = colors;
console.log(r, o, y, g, b, v);

const [, , , , , indg, ] = colors;
console.log(indg);






const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const muppetName = muppet.muppetName
const color = muppet.color
const song = muppet.song 
const job = muppet.job 
const partner = muppet.partner

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};


const { song2, song4 } =  nestedMuppet.album.theMuppetMovie
const { nestedJob, nestedPartner } =  nestedMuppet


// Objects

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner