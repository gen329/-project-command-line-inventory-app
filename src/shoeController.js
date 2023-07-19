const { nanoid } = import("nanoid");


const inform = console.log
function create(allShoes, shoeName, shoeSize, description, colorWay) {
  const shoe = {
    id: nanoid(6),
    name: shoeName,
    priceInCents: Math.floor(Math.random() * (8000-2000)+2000),
    size: shoeSize,
    description: description,
    colorWay: colorWay
  };
  allShoes.push(shoe);
  return allShoes;
};

function index (shoes) {
  return shoes.map((shoe) => shoe.id + " " + shoe.name).join("\n");
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

function show(shoes, shoesId) {
  const shoe = shoes.find((shoe) => shoe.id === shoesId);
  return shoe.id + " " + shoe.name + " ";
};

function addToCart(cart, shoes, shoeId) {
  const shoe = shoes.find(sneaker => sneaker.id === shoeId);
  cart.push(shoe);
  return cart;
};

function cartTotal(cart) {
  return cart.reduce((previousValule,currentValue) => Number(previousValule.priceInCents) + Number(currentValue.priceInCents));
};

function cancelCart () {
  writeJSONFile("./data","cart.json",[]);
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