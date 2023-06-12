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
  let writeToFile = false;
  let updatedShoes = [];
  const action = process.argv[2];
  const shoe = process.argv[3];
  switch (action) {
    case "index":
      index(action,shoe)
      inform(action);
      break;
    case "create":
      create(action,shoe)
      inform(action, shoe);
      break;
    case "show":
      show(action,shoe)  
      inform(action, shoe);
      break;
    case "update":
      update(action,shoe)  
      inform(action, shoe);
      break;
    case "destroy":
      destroy(action,shoe)
      inform(action, shoe);
      break;
    case "update":
      updatedShoes = edit(shoes,shoe,process.argv[4]);
      writeToFile = true;
    case "addToCart" :
        addToCart(cart,shoes)
        writeJSONFile("./data", "cart.json", cart);
        break;
    case "cartTotal" :
        inform(cartTotal(cart));
        break;
    case "cancelCart" :
        cancelCart();
        break;
    default :
    inform("there was an error");
}

    if (writeToFile) {
    inform("updating data");
    writeJSONFile("./data", "shoes.json", updatedShoes);
    }
}
run();