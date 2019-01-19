function giveItBackLater(value,callback) {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 200)

}

function addSomePromises(somePromise) {
    somePromise(value)
        .then(value => valuevalue)
        .catch(value => valuevaluevalue)

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
