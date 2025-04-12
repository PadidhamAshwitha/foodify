import {Sum} from "../Sum";

test("the sum function will calculate the sum of two numbers", () => {
    const result = Sum(2,3);
    //Assertion
    expect(result).toBe(5);
});