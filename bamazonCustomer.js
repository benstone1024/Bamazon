const mysql = require("mysql");
const inquirer = require("inquirer")
require('console.table');

const connection = myql.creatConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"bamazon"
});

connection.connect(err=>{
    if (err){
        console.error(`error connecting:${err}`);
    }
    console.log('connected!');
    loadProducts();
}); 

 const loadProducts() => {
    connection.query("SELECT * FROM products", (err,res) => {
        if (err)
            throw err;
    }
    console.table(res);
    promptCustomerForItem(res);
});

}
inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      // Check if the user wants to quit the program
      checkIfShouldExit(val.choice);
      const choiceId = parseInt(val.choice);
      const product = checkInventory(choiceId, inventory);

      console.log(product)

      // If there is a product with the id the user chose, prompt the customer for a desired quantity
      if (product) {
        // Pass the chosen product to promptCustomerForQuantity
        promptCustomerForQuantity(product);
      }
      else {
        // Otherwise let them know the item is not in the inventory, re-run loadProducts
        console.log("\nThat item is not in the inventory.");
        loadProducts();
      }
    });

    const checkInventory = choiceId, inventory)=> {
        for(var i =0;i < inventory.length;)
    }
    const checkIfShouldExit = choice => {
        if (choice.toLowerCase()=== "q"){
            console.log("don't let scrren hit you.");
            process.exit(0);
        }
    });
}

inquirer
.prompt([
  {
    type: "input",
    name: "quantity",
    message: "How many would you like? [Quit with Q]",
    validate: function(val) {
      return val > 0 || val.toLowerCase() === "q";
    }
  }
])
.then(function(val) {
  // Check if the user wants to quit the program
  checkIfShouldExit(val.quantity);
  var quantity = parseInt(val.quantity);

  // If there isn't enough of the chosen product and quantity, let the user know and re-run loadProducts
  if (quantity > product.stock_quantity) {
    console.log("\nInsufficient quantity!");
    loadProducts();
  }
  else {
    // Otherwise run makePurchase, give it the product information and desired quantity to purchase
    makePurchase(product, quantity);
  }
});

connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      // Let the user know the purchase was successful, re-run loadProducts
      console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
      loadProducts();
    }
  );

  const promptCustomerForQuantity = product =>{

  }

  