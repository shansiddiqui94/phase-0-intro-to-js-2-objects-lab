// Write your solution in this file!

const employee = {
    name: "Shan",
    streetAddress: "42 wallaby way, Sydney"       
}

function updateEmployeeWithKeyAndValue(obj, key, value){
const newEmp = {...obj}
newEmp[key] = value
return newEmp
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee, "street", "70-42 Kissena Blvd"
)


function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
   object[key] = value;
    return object;
  }
 const newEmp = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "36 Park Avenue")

//delete

function deleteFromEmployeeByKey(object, key){
    const delEmp = {...object}
    delete delEmp[key]
    return delEmp
   
}

const updateEmp = deleteFromEmployeeByKey(employee)

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}

const empByKey = destructivelyDeleteFromEmployeeByKey(employee)