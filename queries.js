const Product = require("./models").product;
const Order = require("./models").order;
const User = require("./models").user;

const someQuery = async () => {
  try {
    const order = await Order.findByPk(1, {
      include: [Product],
    });
    console.log(order.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

someQuery();

/* const getAllOrders = async () => {
  try {
    const orders = await Order.findAll();
    console.log(orders);
  } catch (e) {
    console.log(e.message);
  }
};

getAllOrders(); */

// get user(s)
// get storeCategory
// get storeType
// get store
// get product
// get order
