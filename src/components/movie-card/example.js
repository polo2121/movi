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

// let name = "";

// setTimeout(() => {
//   console.log("in the timer");
// }, 300);

// console.log(name);

// try {
//   let res = await fetch();
//   if (res.ok !== true) console.log("fail");
//   let data = await res.json();
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

const round10 = 5;
const round11 = 4;
const round12 = 3;
const round13 = 2;

function calculate(score1, score2) {
  let result, smallScore, bigScore;
  const df = score1 + score2;

  if (score1 > score2) {
    smallScore = score2;
    bigScore = score1;
  }
  if (score2 > score1) {
    smallScore = score1;
    bigScore = score2;
  }

  if (bigScore === 13) smallScore = smallScore + 2;
  if (bigScore === 12) smallScore = smallScore + 3;
  if (bigScore === 11) smallScore = smallScore + 4;
  if (bigScore === 10) smallScore = smallScore + 5;
  if (bigScore === 9) smallScore = smallScore + 6;

  console.log(smallScore);

  result = 16 - smallScore;

  if (result === 9) return "no result";
  if (result === 8) return -7.5;
  if (result === 7) return -6.5;
  if (result === 6) return -5.5;
  if (result === 5) return -4.5;
  if (result === 4) return -3.5;
  if (result === 3) return -2.5;
  if (result === 2) return "winner and -1.5";
  if (result) return "no handicup";

  // return 16 - score2;
}

console.log(calculate(7, 11));
