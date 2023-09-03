const employee = {
    name: "Lexie",
    streetAddress: "554 S. 2nd St." 
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
const newEmployee = {...employee}
newEmployee[key] = value
return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newNewEmployee = {...employee}
    delete newNewEmployee[key]
    return newNewEmployee
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]
    return employee
}
