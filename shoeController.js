const { nanoid } = require("nanoid");

const inform = console.log
function create(shoes, shoeName) {
    const shoe = { name: shoeName };
    shoes.push(shoe);
    return shoes;
  }

function index(shoes) {
    return shoes.map((shoe) => shoe.id + " " + shoe.name).join("\n");
  }

function destroy(shoes, shoesId) {
    const index = shoes.findIndex((shoe) => shoe.id === shoesId);
    if (index > -1) {
      shoes.splice(index, 1);
      inform("Shoe has been removed from collection");
      return shoes;
    } else {
      inform("Shoe not found. No action taken");
      return shoes;
    }
  }

function edit(shoes, shoesId, updatedShoe) {
    const index = shoes.findIndex((shoe) => shoe.id === shoesId);
    if (index > -1) {
      shoes[index].id = shoesId;
      shoes[index].name = updatedShoe;
      inform("Shoe successfully updated");
      return shoes;
    } else {
      inform("Shoe not found. No action taken");
      return shoes;
    }
  }

function show(shoes, shoesId) {
    const shoe = shoes.find((shoe) => shoe.id === shoesId);
    return shoe.id + " " + shoe.name + " ";
  }


module.exports = { create, destroy, edit, index, show, cart };