import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const saleTotal = employeeSales(employee).length
                    window.alert(`${employee.name} sold ${saleTotal} products`)
                }
            }
        }
    }
)

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

/* 
    Function to capture how many sales an employee made
    Takes employee as parameter
    Returns array of sales
*/
const employeeSales = (employee) => {
    //Declare empty array for sales and employee id
    const sales = []

    //Iterate through orders and find matching employee id
    for (const order of orders) {
        if (order.employeeId === employee.id) {
            sales.push(order)
        }
    }

    return sales
}