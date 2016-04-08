'use strict';
/*
 synchronous vs asynchronous
 */
let startTime = Date.now();
////////////////////////////////////////////////
/*THIS IS SYNCHRONOUS*/
var myName;
myName = "kent";
console.log("\nmyName", myName, Date.now()-startTime + ' ms'); // --> kent


////////////////////////////////////////////////
/*THIS IS SYNCHRONOUS*/
var myName1;
function getMyName1() {
    return "david"
}
myName1 = getMyName1();
console.log("\nmyName1", myName1, Date.now()-startTime + ' ms'); // --> david


////////////////////////////////////////////////
/*THIS IS SYNCHRONOUS*/
var myName2;
function getMyName2() {
    myName2 = "josh"
}
getMyName2();
console.log("\nmyName2", myName2, Date.now()-startTime + ' ms'); // --> josh


////////////////////////////////////////////////
/*A Simple Callback - It's still synchronous*/
var myName3;
function getMyName3(cb) {
    console.log('inside getMyName3', cb, Date.now()-startTime + ' ms');
    cb("james")
}
getMyName3(function (dataReturned) {
    myName3 = dataReturned;
    console.log('inside calling getMyName3', dataReturned, Date.now()-startTime + ' ms')
});
console.log("\nmyName3", myName3, Date.now()-startTime + ' ms'); // --> james


////////////////////////////////////////////////
/*THIS IS ASYNCHRONOUS*/
var myName4;
myName4 = getMyName4();

function getMyName4() {
    setTimeout(function () {
        console.log('in getMyName4 timeout', Date.now()-startTime + ' ms');
        return "jared"
    }, 1000)
}

console.log("\nmyName4", myName4, Date.now()-startTime + ' ms');


////////////////////////////////////////////////
/*THIS IS ASYNCHRONOUS*/
let myName5;
getMyName5();

function getMyName5() {
    setTimeout(function () {
        console.log('in getMyName5 timeout', Date.now()-startTime + ' ms');
        myName5 = 'Ammon'
    }, 1000)
}

console.log("\nmyName5", myName5, Date.now()-startTime + ' ms');


////////////////////////////////////////////////
/*THIS IS ASYNCHRONOUS - With a callback*/
let myName6;
getMyName6(function(dataReturned){

    myName6=dataReturned
});

function getMyName6(cb) {
    setTimeout(function () {
        console.log('in getMyName6 timeout', Date.now()-startTime + ' ms');
        cb('Natalie')
    }, 1000)
}

console.log("\nmyName6", myName6, Date.now()-startTime + ' ms');


////////////////////////////////////////////////
console.log('\n\nWaiting 6 seconds to write results again', Date.now()-startTime + ' ms');
setTimeout(function () {
    console.log("myName4 (after waiting) is", myName4, Date.now()-startTime + ' ms');
    console.log("myName5 (after waiting) is", myName5, Date.now()-startTime + ' ms');
    console.log("myName6 (after waiting) is", myName6, Date.now()-startTime + ' ms');
}, 6000);