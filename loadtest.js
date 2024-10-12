// loadTest.js
const autocannon = require("autocannon");

async function runLoadTest() {
  const url = "http://localhost:3000"; // Change this to your application's URL
  const connections = 1000; // Number of concurrent connections
  const duration = 60; // Duration of the test in seconds

  console.log(
    `Starting load test with ${connections} connections for ${duration} seconds...`
  );

  const instance = autocannon({
    url,
    connections,
    duration,
    requests: [
      {
        method: "GET", // Adjust the method and path according to your API
        path: "/", // Change this to the endpoint you want to test
        // Optionally, you can add headers or body for POST requests
        // headers: { 'Authorization': 'Bearer your_token' },
        // body: JSON.stringify({ key: 'value' }),
      },
    ],
  });

  autocannon.track(instance);

  instance.on("done", (result) => {
    console.log("Load test completed!");
    console.log(result);
  });
}

// Execute the load test
runLoadTest().catch(console.error);
