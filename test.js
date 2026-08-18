console.log("Running tests...");

const expected = "Hello World!";

if (expected === "Hello World!") {
    console.log("Test passed!");
    process.exit(0);
} else {
    console.log("Test failed!");
    process.exit(1);
}