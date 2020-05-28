'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let seenVals = [];
    let currentObj = linkedlist.head
    while(currentObj.next !== null) {
        if(!seenVals.includes(currentObj.next.value)) {
            seenVals.push(currentObj.value)
            currentObj = currentObj.next
        } else {
            return true
        }
    }
    return false
};

//linkedList is an object!!

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/

const findLoop = (linkedlist) => {
    let seenVals = [];
    let currentObj = linkedlist.head
    while(currentObj.next !== null) {
        if(!seenVals.includes(currentObj.next.value)) {
            seenVals.push(currentObj.value)
            currentObj = currentObj.next
        } else {
            console.log()
            return currentObj.next.value
        }
    }
    return false
};

module.exports = {isLoop, findLoop}