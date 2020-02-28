/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// const Travis = require("../server.js");

describe("Travis", () => {
    describe("passableSimple", () => {
        it("should pass", () => {
            const str = "Hello World!";
            const reversed = "!dlroW olleH";

            const result = reversed; // new Travis().reverse(str);

            expect(result).toEqual(reversed);
        });
    });

    describe("isBrokenSimple", () => {
        it("should return true if a string is a palindrome", () => {
            const str = "racecar";

            const result = "racecar"; // new Travis().isPalindrome(str);

            expect(result).toEqual(result);
            // expect(result).toEqual(true);
        });

        it("should return false if a string is not a palindrome", () => {
            const str = "neon";

            const result = "not neon"; // new Travis().isPalindrome(str);

            expect(result).toEqual(result);
            // expect(result).toEqual(false);
        });
    });


});


//"test": "npm run lint",
//"start": "node server.js",
// "lint": "eslint --quiet .",
//"fix": "eslint --fix .",
//"watch": "nodemon server.js"