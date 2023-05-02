const express = require("express");
const auth = require("../Middleware/auth");
const employeeController = require("../controllers/employee-controller");

const router = express.Router();

//
router.route("/new-allowance")
      .patch(employeeController.newAllowance)
      .get(employeeController.getAllowances)
// router.patch("/new-allowance",employeeController.newAllowance);

// Save and Commit salary
router.get("/getSalaries", employeeController.getSalaries);

// Save and Commit salary
router.post("/comit", auth, employeeController.comitSalaries);



//Update Increments in Bulk 
router.patch("/updateall", auth, employeeController.updateAllEmployee);


//Get All Employees
router.get("/", auth, employeeController.getEmployees);


router.route("/stats")
      .get(employeeController.getStats)
      .delete(employeeController.deleteSalaryRecord)

//Get Single Employee
router.get("/:id", auth, employeeController.getEmployee);

//Add Employee
router.post("/add", auth, employeeController.addEmployee);

//Update Employee
router.patch("/:id", auth, employeeController.updateEmployee);


//Delete Employee
// router.delete("/:id", auth, employeeController.deleteEmployee);

//Verify Employee
router.get("/verify/:id", auth, employeeController.verifyEmployee);




module.exports = router;
