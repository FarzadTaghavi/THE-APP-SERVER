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
};
