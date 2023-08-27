"use strict";

/*----------------------------------------
 DOM ELEMENTS
 ----------------------------------------*/

const day = document.getElementById("day");

const hour = document.getElementById("hour");
// hour.innerHTML = 22;

const minute = document.getElementById("minute");
// minute.innerHTML = 35;

const second = document.getElementById("minute");
// second.innerHTML = 55;

const endDate = new Date("December 25 2023");
console.log(endDate);

const endTimeInMs = endDate.getDate();
// millisecondi dal 1970 al 25 Dicembre 2023
console.log(endTimeInMs);

// prendo la data annuale, concatenandola alla funzione getTime;
const nowInMs = new Date().getTime();

const millisecondsLeft = endTimeInMs - nowInMs;
console.log(millisecondsLeft);

// tabella millisecondi
const msPerSecond = 1000;
const msPerMinute = 60 * msPerSecond;
const msPerHour = 60 * msPerMinute;
const msPerDay = 24 * msPerHour;

console.log(msPerDay);

console.log(millisecondsLeft / msPerDay);

day.innerHTML = Math.floor(millisecondsLeft / msPerHour);



