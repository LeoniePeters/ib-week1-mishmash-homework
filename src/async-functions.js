function giveItBackLater(value,callback) {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 200)

}

//In the next function I was unable to figure out what to do.
// I don't fully grasp the concept of chaining promises yet.

function addSomePromises(somePromise) {
    return somePromise
        .then((value) => {console.log(value.repeat(2))})
        .catch((error) => {console.error(error.repeat(3))})
}

function promiseToGiveItBackLater(value) {
    return new Promise((resolve) => {
        function loadComplete() {
            resolve(value)
        }
        setTimeout(loadComplete, 200)    
    })
}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}
