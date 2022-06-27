const { BadRequestError } = require("../utils/errors.js");

class GiftExchange {
    static pairs(names) {
        // If the number of names is odd, throw an error.
        if (names.length % 2 !== 0) {
            throw new BadRequestError(`The pairs need to be entered in an even amount.`);
        }

        // Otherwise, randomly pair names together.
        const namedPairs = [];

        while (names.length) {
            const currentPair = [];

            while (currentPair.length < 2 && names.length > 0) {
                const index = Math.floor(Math.random() * names.length);
                currentPair.push(names[index]);
                names.splice(index, 1);
            }

            namedPairs.push(currentPair);
        }
        return namedPairs;
    }

    static traditional(names) { 
        const newPairs = this.pairs(names);

        return newPairs.reduce((prev, item, index) => {
            if (index + 1 === newPairs.length) {
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`,
                    `${item[1]} is giving a gift to ${newPairs[0][0]}`,
                ];
            }
            else {
                return [
                    ...prev,
                    `${item[0]} is giving a gift to ${item[1]}`,
                    `${item[1]} is giving a gift to ${newPairs[index + 1][0]}`,
                ];
            }
        }, []);
    }
}

module.exports = GiftExchange;