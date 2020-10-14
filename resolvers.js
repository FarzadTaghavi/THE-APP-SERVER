const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("./config/constants");
const { toJWT, toData } = require("./auth/jwt");

module.exports = {
  Query: {
    users: async (parent, _argsm, { db }, info) => {
      return db.user.findAll();
    },
    userById: async (parent, { id }, { db }, info) => {
      return db.user.findByPk(id);
    },

    //////////////////////////////////////////

    orders: async (parent, _argsm, { db }, info) => {
      return db.order.findAll();
    },

    orderById: async (parent, { id }, { db }, info) => {
      return db.order.findByPk(id, {
        include: [db.product],
      });
    },

    allOrdersByUserId: async (parent, { id }, { db }, info) => {
      return db.order.findAll({
        where: {
          userId: id,
        },
      });
    },

    //////////////////////////////////////////

    products: async (parent, _argsm, { db }, info) => {
      return db.product.findAll();
    },

    productsByStoreId: async (parent, { id }, { db }, info) => {
      return db.product.findByPk(id, {
        include: [db.store],
      });
    },

    //////////////////////////////////////////

    storeCategories: async (parent, _argsm, { db }, info) => {
      return db.storeCategory.findAll();
    },

    storeCategoryById: async (parent, { id }, { db }, info) => {
      return db.storeCategory.findByPk(id);
    },

    //////////////////////////////////////////

    storeTypes: async (parent, _argsm, { db }, info) => {
      return db.storeType.findAll();
    },

    storeTypeById: async (parent, { id }, { db }, info) => {
      return db.storeType.findByPk(id);
    },

    storeTypeByCategoryId: async (parent, { id }, { db }, info) => {
      return db.storeType.findAll({
        where: {
          storeCategoryId: id,
        },
      });
    },

    //////////////////////////////////////////

    stores: async (parent, _argsm, { db }, info) => {
      return db.store.findAll();
    },

    storeById: async (parent, { id }, { db }, info) => {
      return db.store.findByPk(id);
    },

    storesByTypeId: async (parent, { id }, { db }, info) => {
      return db.store.findAll({
        where: {
          storeTypeId: id,
        },
      });
    },

    productsByStoreId: async (parent, { id }, { db }, info) => {
      return db.product.findAll({
        where: {
          storeId: id,
        },
      });
    },

    //////////////////////////////////////////
  },

  Mutation: {
    signup: async (
      parent,
      { fullName, email, password, phoneNumber },
      { db },
      info
    ) => {
      const user = await db.user.create({
        fullName: fullName,
        email: email,
        password: bcrypt.hashSync(password, SALT_ROUNDS),
        phoneNumber: phoneNumber,
      });
      delete user.dataValues["password"];
      const token = toJWT({ userId: user.dataValues.id });
      return { token, user: user.dataValues };
    },
    login: async (parent, { email, password }, { db }, info) => {
      const user = await db.user.findOne({ where: { email } });
      if (!user) return new ApolloError("User with that email not found", 400);
      if (!bcrypt.compareSync(password, user.password))
        return new ApolloError("Password incorrect", 400);
      delete user.dataValues["password"]; // don't send back the password hash
      const token = toJWT({ userId: user.id });
      return { token, user: user.dataValues };
    },
  },
};
