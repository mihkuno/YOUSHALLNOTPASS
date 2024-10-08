const Utility = {
    hello: () => {
        return 'Hello World';
    },
    
    /**
     * 
     * @param {string} password 
     * @returns {boolean}
     */
    validate: (password) => {
        
        if (
            // greater than 4    
            password.length >= 4

            // contains at least one upper case
            && password.match(/[A-Z]/)

            // reject passwords without numbers
            && password.match(/[0-9]/)

            // reject less than 3 numbers
            && password.match(/[0-9]/g).length >= 3
        ) 
        return true;

        // reject if all is false
        return false;
    }
}

module.exports = Utility;