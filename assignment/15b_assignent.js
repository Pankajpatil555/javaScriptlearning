class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahe = new Employee(99, "Mahesh", "HR", 85000, "Infy")

const arrayofemp=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahe]

console.log("**************************************************************");
arrayofemp.forEach(Employee => {
    if (Employee.emp_company==="TCS") {
        console.log(`Employee name: ${Employee.emp_name}  and its company name:${Employee.emp_company}`);
    }
});
console.log("**************************************************************");
arrayofemp.forEach(Employee => {
    if (Employee.emp_salary>=50000 )  {
        // console.log(`Employee name: ${Employee.emp_name}  and its dept name:${Employee.emp_company} salary:${Employee.emp_salary}`);
        console.log(Employee);
    } 
});
console.log("**************************************************************");
var sum=0
arrayofemp.forEach(Employee=> {
    
    sum+=Employee.emp_salary
       

});
console.log(`sum is ${sum}`);
console.log("**************************************************************");
var sum=0
var avg=0
arrayofemp.forEach(Employee=> {
    sum+=Employee.emp_salary 
});
console.log(sum/arrayofemp.length);
console.log("****************************************************************");
arrayofemp.forEach(Employee => {
    if (Employee.emp_salary>=75000 && Employee.emp_dept==="IT" || Employee.emp_salary>=75000 && Employee.emp_dept==="HR")  {
        console.log(`Employee name: ${Employee.emp_name}  and its dept name:${Employee.emp_dept} salary:${Employee.emp_salary}`);
        
    }   
});

