// const HttpError = require("../models/http-error");
// const mongoose = require("mongoose");
// const moment = require("moment");
// const Payslip = require('../models/payslip')

// const salaryslip = async (req, res, next) => {
//     var obj = {}
//     obj = req.body
//     obj.date = moment().format("DD-MM-YYYY"),
//         res.send(obj)

    // try {
    //     const sess = await mongoose.startSession();
    //     sess.startTransaction();
    //     await Payslip.save({ session: sess });
    // } catch (error) {
    //     console.log(error);
    //     const err = new HttpError(
    //         "something went wrong, could not save Employee",
    //         403
    //     );
    //     return next(err);
    // }

    // console.log("req obj", obj)
    // const employee = new Employee(obj);
    // const createUser = new User({
    //     name: obj.basicInfo.name,
    //     email: obj.basicInfo.email,
    //     role: "employee",
    //     password: obj.basicInfo.password,
    // });
    // const userExists = await User.findOne({ email: obj.basicInfo.email });
    // if (userExists) {
    //     const err = new HttpError("user already exists", 409);
    //     return next(err);
    // }
    // try {
    //     const sess = await mongoose.startSession();
    //     sess.startTransaction();
    //     await employee.save({ session: sess });
    //     await createUser.save({ session: sess });
    //     await sess.commitTransaction();
    // } catch (error) {
    //     console.log(error);
    //     const err = new HttpError(
    //         "something went wrong, could not save Employee",
    //         403
    //     );
    //     return next(err);
    // }
// }


// module.exports = {
//     salaryslip
// };