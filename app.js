const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  let todaysDate = new Date();
  dateAfter100Days = addDays(todaysDate, 100);
  response.send(
    `${dateAfter100Days.getDate()}/${
      dateAfter100Days.getMonth() + 1
    }/${dateAfter100Days.getFullYear()}`
  );
});
module.exports = app;
