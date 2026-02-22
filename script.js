// DOM - 3 Tasks

// Task 1: Greater than Average
var task1Btn = document.querySelector("#task-1 #btn");
var task1Result = document.querySelector("#task-1 #result");
var values = [10, 20, 30, 40, 50];

task1Btn.addEventListener("click", function () {
  var sum = values.reduce((prev, curr) => prev + curr, 0) / values.length;

  var greater = values.filter((value) => value > sum);

  task1Result.innerHTML =
    "Average: " + sum + "<br> Greater than Average: " + greater.join(", ");
  task1Result.classList.add("win");
});

// Task 3: Rotate Div 360 Deg
var task3Box = document.querySelector("#task-3 #box");
var task3Count = document.querySelector("#task-3 #count");
var count = 0;

task3Box.addEventListener("dblclick", function () {
  count++;
  task3Box.style.transform = "rotate(" + count * 360 + "deg)";
  task3Count.textContent = count;
});

// Task 5: Gambling Game
var task5Btn = document.querySelector("#task-5 #gamble-btn");
var task5Value = document.querySelector("#task-5 #gamble-value");
var task5Result = document.querySelector("#task-5 #gamble-result");

task5Btn.addEventListener("click", function () {
  var randomNum = Math.floor(Math.random() * 9) + 1;

  task5Value.innerHTML = "You rolled: " + randomNum;

  if (randomNum === 7) {
    task5Result.innerHTML = "Congratulations! You won!";
    task5Result.classList.remove("red");
    task5Result.classList.add("win");
  } else {
    task5Result.innerHTML = "Sorry, you lost. Try again!";
    task5Result.classList.remove("win");
    task5Result.classList.add("red");
  }
});

// Task 7: Live Textarea Counter
var task7Textarea = document.querySelector("#task-7 #message");
var task7Counter = document.querySelector("#task-7 #counter");

task7Textarea.addEventListener("input", function () {
  if (task7Textarea.value.length > 100) {
    task7Counter.innerHTML = "Maximum character limit reached!";
    task7Counter.classList.add("red");
  } else {
    task7Counter.classList.remove("red");
  }

  task7Counter.innerHTML = task7Textarea.value.length + " characters";
});

// Task 8: Product List Filter
var task8Input = document.querySelector("#task-8 #filter");
var productList = document.querySelector("#task-8 #product-list");
var products = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lime",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tomato",
  "Ugli Fruit",
  "Vanilla Bean",
];

function displayProducts(products) {
  products.forEach((product) => {
    var li = document.createElement("li");
    li.innerHTML = product;
    productList.appendChild(li);
  });
}

displayProducts(products);

task8Input.addEventListener("input", function () {
  const value = task8Input.value.toLowerCase();
  productList.innerHTML = "";

  var filteredProducts = products.filter((product) =>
    product.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()),
  );

  displayProducts(filteredProducts);
});

// Task 9: Dynamic Card Generator
var task9Btn = document.querySelector("#task-9 #btn");
var task9Container = document.querySelector("#task-9 #card-container");
var count = 0;

task9Btn.addEventListener("click", function () {
  var card = document.createElement("div");
  card.setAttribute("id", "card");

  var left = document.createElement("div");
  left.setAttribute("id", "left");

  var img = document.createElement("img");
  img.setAttribute("src", "https://picsum.photos/100/100");
  left.appendChild(img);

  var name = document.createElement("h4");
  name.innerHTML = "John Doe";
  left.appendChild(name);

  var btnDelete = document.createElement("button");
  btnDelete.setAttribute("id", "remove");
  btnDelete.innerHTML = "Delete";

  card.appendChild(left);
  card.appendChild(btnDelete);

  card.setAttribute("data-id", count);
  task9Container.appendChild(card);
  count++;
});
