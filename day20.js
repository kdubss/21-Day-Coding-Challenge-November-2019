// ./day20.js
/*
Challenge #20 - Bouncy Castles

There's a new attraction at this year's town festival.
The organizers have decided to bring in several inflatable attractions,
but they have no clue how to much blow them up. Each attraction needs
to be pumped to a precise volume to achieve maximum festival fun!

The attractions are each made up of a combination of several different
shapes: cones, spheres and prisms. For example, the giant inflatable
duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.

Instructions

Each shape has a different calculation for determining volume, so we'll
need to create a few functions that will help us figure out the volume of
the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

- sphereVolume()will calculate the volume of a sphere given a radius
- coneVolume() will calculate the volume of a cone given a radius and a
height
- prismVolume() will calculate the volume of a prism given a height,
a width, and a depth

The fourth function, totalVolume(), will receive an array containing the
different shapes that make up a single attraction. The totalVolume function
should use the previous three functions to calculate the total volume of an
attraction.

Don't worry about getting the answers to the perfect precision: our tests
will check to see that you're within a correct range.
*/

const PI = 3.14159

const sphereVolume = function (radius) {
  return (4 / 3) * (PI * (radius ** 3));
};

const coneVolume = function (radius, height) {
  return (PI * (radius ** 2)) * (height / 3);
};

const prismVolume = function (height, width, depth) {
  return (width * depth) * height;
};

const totalVolume = function (solids) {
  let total_volume = 0;
  solids.map(solid => {
    switch(solid.type) {
      case 'sphere':
        total_volume = total_volume + sphereVolume(solid.radius);
        break;
      case 'cone':
        total_volume = total_volume + coneVolume(solid.radius, solid.height);
        break;
      case 'prism':
        total_volume = total_volume + prismVolume(
          solid.height, solid.width, solid.depth
        );
        break;
      default:
        return;
    }
  });
  console.log('total_volume: ', total_volume);
  return total_volume;
};

const sphere = {
  type: 'sphere',
  radius: 2
};
const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};
const prism = {
  type: 'prism',
  height: 3,
  width: 4,
  depth: 5
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone2 = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone2
];

console.log(sphereVolume(sphere.radius))
// console.log(coneVolume(cone.radius, cone.height));
// console.log(prismVolume(prism.height, prism.width, prism.depth));
console.log(totalVolume(duck));