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
}

const coneVolume = function (radius, height) {
  return (PI * (radius ** 2)) * (height / 3);
}

const prismVolume = function (height, width, depth) {

}

const totalVolume = function (solids) {

}

const sphere = {
  type: 'sphere',
  radius: 2
};
const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

console.log(sphereVolume(sphere.radius))
console.log(coneVolume(cone.radius, cone.height));