// function greet(name) {
//   return "Hi " + name;
// }

// console.log(greet("John"));

// let name = "john";
// let grade = "A";
// let favLang = "JS";
// let age = "21";

// console.log(
//   `Hi ${name}. Your age is ${age}. My Grade is ${grade} and fav language is ${favLang}`
// );

// const getPosts = () =>
//   fetch("")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

// const calPayment = (price, tax, discount = 0) => {
//   return price + tax + discount;
// };

let name = "";

setTimeout(() => {
  console.log("in the timer");
}, 300);

console.log(name);

try {
  let res = await fetch();
  if (res.ok !== true) console.log("fail");
  let data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
