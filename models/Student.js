const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema ({
    ID: mongoose.Types.ObjectId,
    firstName : String,
    surname : String,
    address : { type: mongoose.Types.ObjectId, ref: "Address" }
});

const Student = mongoose.model("Student", StudentSchema);


// module.exports = Student;
// module.exports= Address;

module.exports = Student;