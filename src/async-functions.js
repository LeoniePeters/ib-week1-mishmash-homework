function giveItBackLater(value,callback) {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 200)

}

function addSomePromises() {

}

function promiseToGiveItBackLater() {

}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}