"use strict";

const luxon = require("luxon");

console.log(luxon);

const randomInt = function (min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
};

const dateFormat = function (data) {
     /*   const dateObj = new Date(date);
        const d = dateObj.getDate();
        const m = dateObj.getMonth()+1;
        const y = dateObj.getFullYear();
        return`${d}.${m}.${y}`
*/
     const dateObj = luxon.DateTime.fromJSDate(data);
     return dateObj.toFormat('dd.MM.yyyy')

};

module.exports = {
        randomInt,
        dateFormat
};

console.log("one more test");