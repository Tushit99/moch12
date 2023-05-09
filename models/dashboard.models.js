const mongoose = require("mongoose");

const employSchema = mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  Email: String,
  Department: String,
  Salary: Number,
});

const Employmodel = mongoose.model("employ", employSchema);

module.exports = {
  Employmodel,
};
