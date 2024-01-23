// 1- a simple JSON object
// let jsonObject = {
// 	name: "John",
// 	age: 30,
// 	city: "New York",
// 	isStudent: true,
// };

// console.log(jsonObject.name);
// console.log(jsonObject.age);

// ******************

// 2- json array

// let jsonArray = [
// 	{
// 		name: "Tom",
// 		age: 28,
// 	},
//     {
//         name: "Jerry",
//         age: 28,
//     }
// ];

// ************************
// 3- javascript object to JSON

// let jsonObject = {
// 	name: "John",
// 	age: 30,
// 	city: "New York",
// 	isStudent: true,
// };
// let jsonString = JSON.stringify(jsonObject);
// console.log(jsonString);

// JSON string to jS obj

// let someJsonString =
// 	'{"name":"John","age":30,"city":"New York","isStudent":true}';

// let parsedJson = JSON.parse(someJsonString);
// console.log(parsedJson);

// *******************

// 3- Nested JSON example

// let nestedJSON = {
//     "name": "Alice",
//     "address": {
//         "streetAddress": "12345 Elm St.",
//         "city": "New York"
//     },
//     "hobbies": ["Reading", "Coding"]
// };

// console.log(nestedJSON.address.city);
// console.log(nestedJSON.hobbies[1]);

// ******************

// 4- Handle the Date in JSON
// let jsonWithDate = {
//     "event": "webinar",
//     "date": "2024-01-23"
// }
// let eventDate = new Date(jsonWithDate.date)
// console.log(eventDate.toString());

// *************************

// 5- JSON with Array of Obj

// let userJson = {
//     "user" : [
//         {"id": 1, "username": "Henry"},
//         {"id": 2, "username": "Sam"}
//     ]
// };
// userJson.user.forEach(user =>{
//     console.log(`ID: ${user.id} and Name: ${user.username}`);
// })

// *********************
// 6- json with conditional statement
// let employeeJson = {
//     "name": "Charlie",
//     "age": 25,
//     "manger": false,
//     "department": "IT"
// }

// if(employeeJson.manger){
//     console.log(`${employeeJson.name} is a manager in the ${employeeJson.department} department`);
// }else{
//     console.log(`${employeeJson.name} is not a manager`);
// }

// *********************

// 7- Modify the JSON objects
// const productJson = {
//     "id":105,
//     "name":"Laptop",
//     "price":1200,
// };
// update the price
// productJson.price = 900;
// productJson.price = 700;
// productJson.price = 500;
// console.log(productJson);

// *******************

// 8-  Complex Nested JSON
// let complexJson = {
//     "name": "Tech Burner",
//     "department": [
//         {
//             "name":"Development",
//             "employees": [
//                 {"name":"John", "position":"developer"},
//                 {"name":"Emma", "position":"Tester"}
//             ]
//         },
//         {
//             "name":"sales",
//             "employees":[
//                 {"name":"Mike","position":"Sales Manager"}
//             ]
//         }
//     ]
// };
// complexJson.department.forEach(dept =>{
//     console.log(`Department: ${dept.name}`);
//     dept.employees.forEach(emp=>{
//         console.log(`${emp.name} is a ${emp.position}`);
//     })
// })

// *******************
// 9-
// let companyStructureJson = {
//     "company": "XYZ Corp",
//     "departments": {
//         "Engineering": {
//             "teams": {
//                 "Development": [{"name": "Alice"}, {"name": "Bob"}],
//                 "QA": [{"name": "Charlie"}]
//             }
//         }
//     }
// };

// let devTeamMember = companyStructureJson.departments.Engineering.teams.Development;
// console.log(devTeamMember);

// ==============
// companyStructureJson.departments.Engineering.teams.Development.forEach(dept => {
//     console.log(dept.name);
// });

// ***********************
// 10-
// let userProfileJson = {
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 30,
// }

// console.log(`Name: ${userProfileJson.firstName} ${userProfileJson.lastName} and his age is ${userProfileJson.age}`);
