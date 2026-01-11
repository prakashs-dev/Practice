const ticketAvble = false;

function waitInQueue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ticketAvble) {
        resolve("Ticket is Available");
      } else {
        reject("Ticket is not Available");
      }
    }, 2000);
  });
}

// function buyTicket() {
//   waitInQueue()
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Go Back home");
//     });
// }

async function buyTicket() {
  try {
    let result = await waitInQueue();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
buyTicket();


/**
 * 
 * Dummy website
---------------
https://ecommerce-playground.lambdatest.io/
https://www.demoblaze.com/index.html
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
https://demo.nopcommerce.com/register
http://www.automationpractice.pl/index.php
https://automationexercise.com/
https://demowebshop.tricentis.com/

 */