let cron = require("node-cron");

//this will run the command for every second
cron.schedule("* * * * * *", () => {
  console.log(`Running a task every minute`);
});
// * represents day of the week
//* * represents month
// * * * represents day of the month
// * * * * represents hour
// * * * * * represents minute
// * * * * * * represents second
