let cron = require("node-cron");

//this will run the command for every second
cron.schedule("* * * * * *", () => {
  console.log(`Running a task every minute`);
});
// * represents day of the week ; format : * or 0-7(where it starts from sunday and ends in sunday)
//* * represents month ; format : * or 1-12 or jan feb..
// * * * represents day of the month : * or 1-31
// * * * * represents hour ; format : * or 0-23
// * * * * * represents minute ; format: * or 0-59
// * * * * * * represents second ; format : * or (0-59)
