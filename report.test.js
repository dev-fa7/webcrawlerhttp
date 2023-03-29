const { sortPages } = require("./report");
const { test, expect } = require("@jest/globals");

test("sortPages", () => {
    const input = {
        "https://fa7.dev/path": 1,
        "https://fa7.dev": 3
    }
    const actual = sortPages(input);
    const expected = [
        ["https://fa7.dev", 3],
        ["https://fa7.dev/path", 1],
    ];
    expect(actual).toEqual(expected);
});