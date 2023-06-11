const { nanoid } = require("nanoid");


function create(shoes, shoeName) {
    const shoe = { name: shoeName };
    shoes.push(shoe);
    return shoes;
  }

  



module.exports = { create, destroy, edit, index, show };