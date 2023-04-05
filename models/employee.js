const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const employeeSchema = new mongoose.Schema({
  basicInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cnic: { type: String, required: true },
    pageNo: { type: Number, required: true },
    accountNo: { type: String, required: true },
    department: { type: String, required: true },
    scale: { type: Number, required: true },
    experience: { type: Number, required: true },
    type: { type: String, required: true },
    designation: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, required: true },
    stg: { type: Number, required: true },
    increment: { type: Number, required: true },
    initialpay: { type: Number, required: true },

  },

  salaries: [],
  currentPay: {
    date: { type: String, required: true },
    verified: { type: Boolean, required: true },
    amolument: {
      basicPay: { type: Number, required: true },
      nonPracticingAllowance: { type: Number, required: false },
      specialHealthCareAllowance: { type: Number, required: false },
      healthProfnlAllowance: { type: Number, required: false },
      houseRent: { type: Number, required: false },
      conPetAllowance: { type: Number, required: false },
      qualificationAllowance: { type: Number, required: false },
      entertainment: { type: Number, required: false },
      personalAllowance: { type: Number, required: false },
      tTAllowance: { type: Number, required: false },
      medicalAllowance: { type: Number, required: false },
      socialSecuirtyBenefit: { type: Number, required: false },
      seniorPostAllowance: { type: Number, required: false },
      chairmanAllowance: { type: Number, required: false },
      rTWardenAllowance: { type: Number, required: false },
      specialReliefAllowance: { type: Number, required: false },


      conveyanceAllowance: { type: Number, required: false },
      darenessAllowance: { type: Number, required: false },
      adhocReliefAllowance: { type: Number, required: false },
      disableAllowance: { type: Number, required: false },
      extraAllowance: { type: Number, required: false },
      specialIncentiveAllowance: { type: Number, required: false },
      ssbAllowance: { type: Number, required: false },
      totalAmoluments: { type: Number, required: false },
      uniTeachingAllowance: { type: Number, required: false }
    },
    deductions: {
      incomeTax: { type: Number, required: false },
      gPFSubscription: { type: Number, required: false },
      recGPF: { type: Number, required: false },
      houseRentR: { type: Number, required: false },
      waterCharges: { type: Number, required: false },
      shortDays: { type: Number, required: false },
      convRecovery: { type: Number, required: false },
      // -  uniTTAllowance: { type: Number, required: false },
      tSAFund: { type: Number, required: false },
      benevolentFund: { type: Number, required: false },
      groupInsurance: { type: Number, required: false },
      eidAdvance: { type: Number, required: false },
      busCharges: { type: Number, required: false },
      //speciialIncentive: { type: Number, required: false },
      //conveyanceAllowance: { type: Number, required: false },
      //  integratedAllowance: { type: Number, required: false },
      // disableAllowance: { type: Number, required: false },
      //  sSB: { type: Number, required: false },
      gIP: { type: Number, required: false },
      //  recEidAdvance: { type: Number, required: false },
      accomadationCharges: { type: Number, required: false },



      carScooterAdvance: { type: Number, required: false },
      electricityCharges: { type: Number, required: false },
      extraCausalLeaves: { type: Number, required: false },
      houseBuildingAdvance: { type: Number, required: false },
      otherCharges: { type: Number, required: false },
      totalDeductions: { type: Number, required: false },
      tradeTax: { type: Number, required: false },
    },
    netPayable: { type: Number, required: true },
  },
},
  {
    timestamps: true
  });

employeeSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Employee", employeeSchema);
