const { writeJSONFile, readJSONFile } = require("./src/helpers");
const {
  create,
  destroy,
  edit,
  index,
  show,
  addToCart,
  cartTotal,
  cancelCart,
} = require("./src/shoeController.js");


function run() {
  const action = process.argv[2];
  const shoe = process.argv[3];
  let shoes = readJSONFile("./data", "shoes.json");
  let writeToFile = false;
  let updatedShoes = [];
  let updatedCart = [];
  let cart = readJSONFile("./data", "cart.json");
  
  const inform = console.log;
  
  switch (action) {
    case "index":
      const allShoes = index(shoes)
      inform(allShoes);
      break;

    case "create":
      updatedShoes = create(shoe, shoes)
      inform(create, "this is creating");
      writeToFile = true;
      break;

    case "show":
      const showShoe = show(shoe, shoes)
      inform(showShoe, "showing shoe");
      break;

    case "destroy":
      updatedShoes = destroy(shoes,shoe, process.argv[4]);
      writeToFile = true;
      break;

    case "update":
      updatedShoes = update(shoes,shoe,process.argv[4]);
      writeToFile = true;
      break;

    case "addToCart" :
        updatedCart = addToCart(cart,shoes, shoe.id);
        writeJSONFile("./data", "cart.json", updatedCart);
        break;

    case "cartTotal" :
        inform(cartTotal(cart));
        break;

    case "cancelCart" :
        cancelCart();
        break;
    default :
    inform("Girl, you messed up. Run it again 💅🏾");
  };

  if (writeToFile) {
    inform("updating data");
    writeJSONFile("./data", "shoes.json", updatedShoes);
  };
};
run();