// Write your solution in this file!
const employee = {
    name : "Aki",
    streedAddress : "11 Broadway"

}
function  updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee ={...employee}
    newEmployee.name = "Sam"
    newEmployee.streetAddress = "11 Broadway"
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
}
function  deleteFromEmployeeByKey(employee, key){
    const newEmployee1 = {...employee}
    delete newEmployee1.name
    return newEmployee1
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    delete employee.streetAddress
    return employee;
}