// Write your solution in this file!
const employee = {
    name: "Holli",
    streetaddress: "100 Aweseome St"
}

function updateEmployeeWithKeyAndValue (employee, key, value){
    return{
        ...employee,
        [key]: value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee

    }

    function deleteFromEmployeeByKey(employee, key, value) {
        return{
            ...employee,
            [key]: value
        }
    }

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}