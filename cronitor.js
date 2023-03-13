const nodeCron = require("node-cron");

nodeCron.schedule("*/5 * * * * *", function () {
  console.log(`sending welcome email to signed up users every five seconds`);
});
