//1//

const students = [

  { name: "Alice", grade: 80 },

  { name: "Bob", grade: 65 },

  { name: "Charlie", grade: 90 },

];

const updateStudentGrades = students.filter( student => student.grade > 70 )
console.log(updateStudentGrades)

//2//

const products = [

  { name: "Laptop", price: 1200 },

  { name: "Smartphone", price: 800 },

  { name: "Tablet", price: 500 },

];
const updateProducts = products.filter(product => product.price > 1000)
console.log(updateProducts)

//3//

const employees = [

  { name: "Alice", salary: 60000 },

  { name: "Bob", salary: 45000 },

  { name: "Charlie", salary: 70000 },

];


const updatedEmployees = employees.filter(employee => employee.salary < 50000)
console.log(updatedEmployees)

//4//

const movies = [

  { title: "Inception", rating: 8.8 },

  { title: "Interstellar", rating: 8.6 },

  { title: "The Dark Knight", rating: 9.0 },

];

const updatedMovies = movies.filter(movie => movie.rating >= 7.0)

console.log(updatedMovies)

//5//

const cars = [

  { brand: "Toyota", year: 2018 },

  { brand: "Honda", year: 2019 },

  { brand: "Ford", year: 2010 },

];
const currentYear = 2024
const updateCars = cars.filter(car =>currentYear - car.year <= 5)
console.log(updateCars)

//6//

const students1 = [
  { name: "Alice", gpa: 3.8 },
  { name: "Bob", gpa: 3.2 },
  { name: "Charlie", gpa: 3.9 },
];

const filteredStudents1 = students1.filter(student => student.gpa >= 3.5)
console.log(filteredStudents1)

//7//

const fruits = [
  { name: "Apple", pricePerPound: 1.5 },
  { name: "Banana", pricePerPound: 2.2 },
  { name: "Orange", pricePerPound: 1.8 },
];
const filteredFruits = fruits.filter(fruit => fruit.pricePerPound <= 2.0)
console.log(filteredFruits)

//8//

const employees1 = [
  { name: "Alice", employed: true },
  { name: "Bob", employed: false },
  { name: "Charlie", employed: true },
];

const filteredEmployees1 = employees1.filter(employee => employee.employed);
console.log(filteredEmployees1);

//9//

const products1 = [
  { name: "Laptop", inStock: true },
  { name: "Smartphone", inStock: false },
  { name: "Tablet", inStock: true },
];

const filteredProducts = products1.filter(product => product.inStock)
console.log(filteredProducts)

//10//
const laptops = [
  { brand: "Dell", screenSize: 14 },
  { brand: "HP", screenSize: 15.6 },
  { brand: "Lenovo", screenSize: 13 },
  { brand: "Acer", screenSize: 17 },
];

const filteredLaptops = laptops.filter(laptop => laptop.screenSize >= 15);
console.log(filteredLaptops);
