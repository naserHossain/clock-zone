const date1 = new Date("August 19, 1975 23:15:30 GMT+07:00");
const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');

const date3 = new Date();
// console.log(date3.toString());

// console.log(date1.getTimezoneOffset());
// console.log(date2.getTimezoneOffset());
// console.log(date3.getTimezoneOffset());

console.log(date1 === date2);

const d = new Date();
const date_utc = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDay(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());
console.log(new Date(date_utc));