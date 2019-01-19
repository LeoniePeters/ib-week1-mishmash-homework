function giveItBackLater(value,callback) {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 200)

}

function addSomePromises() {

}

function promiseToGiveItBackLater(value) {
    return new Promise((resolve) => {
        function loadComplete() {
            resolve(value)
        }
        setTimeout(loadComplete, 200)    
    })
}

promiseToGiveItBackLater(v)

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}