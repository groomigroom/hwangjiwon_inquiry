let box_one = document.querySelector(".box_one");
let box_one_main = document.querySelector(".box_one_main");
let box_one_main_out = document.querySelector(".box_one_main_out");

box_one.addEventListener("click", () => box_one_main.classList.add("on"));
box_one_main_out.addEventListener("click", () => box_one_main.classList.remove("on"));

/*box_two function*/

let box_two = document.querySelector(".box_two");
let box_two_main = document.querySelector(".box_two_main");
let box_two_main_out = document.querySelector(".box_two_main_out");

box_two.addEventListener("click", () => box_two_main.classList.add("on"));
box_two_main_out.addEventListener("click", () => box_two_main.classList.remove("on"));

/*box_three function*/

let box_three = document.querySelector(".box_three");
let box_three_main = document.querySelector(".box_three_main");
let box_three_main_out = document.querySelector(".box_three_main_out");

box_three.addEventListener("click", () => box_three_main.classList.add("on"));
box_three_main_out.addEventListener("click", () => box_three_main.classList.remove("on"));
