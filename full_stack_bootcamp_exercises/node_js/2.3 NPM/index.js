//generate a random name using the sillyname package

//var generateName = require('sillyname');
import generateName from "sillyname";
var sillyName = generateName();

console.log(sillyName);

//generate a random superhero
import superheroes from "superheroes";
var superheroName= superheroes.random();

console.log("I am " + superheroName + "!");