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
} = require("./shoeController.js");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const shoe = process.argv[3];
  let writeToFile = false;
  let updatedShoes = [];
  let updatedCart = [];
  let allShoes = readJSONFile("./data", "shoes.json");
  let cart = readJSONFile("./data", "cart.json");

  switch (action) {
    case "index":
      index(action,shoe)
      inform(action);
      break;
    case "create":
      updatedShoes = create(allShoes, shoe, process.argv[4], process.argv[5], process.argv[6])
      inform(action, shoe);
      break;
    case "show":
      show(action,shoe)
      inform(action, shoe);
      break;
    case "update":
      updatedShoes = update(action,shoe);
      inform(action, shoe);
      break;
    case "destroy":
      updatedShoes = destroy(action,shoe);
      inform(action, shoe);
      writeToFile = true;
      break;
    case "update":
      updatedShoes = edit(shoes,shoe,process.argv[4]);
      writeToFile = true;
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