const { writeJSONFile } = require("./helpers.js");
const { nanoid } = import("nanoid");

function index (shoes) {
  return shoes.map((shoe) => shoe.id + " " + shoe.name).join("\n");
};

function create(allShoes, shoeName, shoeSize, description, colorWay) {
  const shoe = {
    id: nanoid(6),
    name: shoeName,
    priceInCents: Math.floor(Math.random() * (8000-2000)+2000),
    shoeSize: shoeSize,
    description: description,
    colorWay: colorWay,
    inStock: true,
  };
  allShoes.push(shoe);
  return allShoes;
};



function destroy(shoes, shoesId) {
  const index = shoes.findIndex((shoe) => shoe.id === shoesId);
  if (index !== -1) {
    shoes.splice(index, 1);
    inform("Shoe has been removed from collection");
    return shoes;
  } else {
    inform("Shoe not found. No action taken");
    return shoes;
  };
};

function update(shoes, shoesId, updatedShoe) {
  const index = shoes.findIndex((shoe) => shoe.id === shoesId);
  if (index > -1) {
    shoes[index].id = shoesId;
    shoes[index].name = updatedShoe;
    inform("Shoe successfully updated");
    return shoes;
  } else {
    inform("Shoe not found. No action taken");
    return shoes;
  };
};

function show(shoes, shoesId ) {
  const showShoe = shoes.find((shoe) => shoe.id === shoesId);
  return showShoe
};

function addToCart(cart, shoes, shoeId) {
  const currentShoe = shoes.find(shoe => shoe.id === shoeId);
  cart.push(currentShoe);
  return cart;
};

function cartTotal(cart) {
  const total = cart.reduce((a,b) => a.priceInCents + b.priceInCents);
  return total;
}

function cancelCart () {
  writeJSONFile("./data", "cart.json",[]);
};

module.exports = {
  create,
  destroy,
  update,
  index,
  show,
  addToCart,
  cartTotal,
  cancelCart
};
