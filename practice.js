let originalMsg = "one fish two fish red fish blue fish";

const aliceStartsGame = () => {
    return new Promise((resolve) => {
        resolve(originalMsg);
    });
};

const bobWhispers = (message) => {
    return new Promise((resolve) => {
        resolve(message.toUpperCase());
    });
};

const charlieWhispers = (message) => {
    return new Promise((resolve) => {
        resolve(message.replace(/ /g, "-"));
    });
};

const davidWhispers = (message) => {
    return new Promise((resolve, reject) => {
        if (message.length > 40) {
            reject(new Error("David panicked! The message was too long."));
        } else {
            resolve(`${message}!!`);
        }
    });
};

aliceStartsGame()
    .then((msgFromAlice) => bobWhispers(msgFromAlice))
    .then((msgFromBob) => charlieWhispers(msgFromBob))
    .then((msgFromCharlie) => charlieWhispers(msgFromCharlie))
    .then((finalMsg) => (console.log("Final Secret Message: ", finalMsg + "!!")))

    .catch((error) => {
        console.log("error: ", error.message);
    });