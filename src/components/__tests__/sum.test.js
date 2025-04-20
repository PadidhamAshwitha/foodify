//import {Sum } from "../Sum";
const { Sum } = require("../Sum");
test("calculate sum of two numbers", () => {
    const result = Sum(2,3);
    expect(result).toBe(5);
});