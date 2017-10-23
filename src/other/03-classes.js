class Food { /* ... */ }

class Pizza extends Food { /* ... */ }

const order = new Pizza();
if (order instanceof Food) { 
  console.log("Enjoy your meal!");
}