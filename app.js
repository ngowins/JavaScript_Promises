console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let watching = new Promise((resolve, reject) => {
  let userWatchingLiveStream = true;

  if (userWatchingLiveStream == true) {
    resolve("Please like and subscribe!");
  } else {
    reject("User has left.");
  }
});

watching
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
