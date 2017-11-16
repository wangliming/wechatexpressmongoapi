import Joi from 'joi';

export default {
  // POST /api/fans
  createFans: {
    body: {
      // name: Joi.string().required(),
      // phone: Joi.string().required(),
      // avtar: Joi.string(),
      // area: Joi.string()
    }
  },

  // UPDATE /api/fans/update/:wholeFansName
  updateUser: {
    body: {
      name: Joi.string().required(),
      phone: Joi.string().required(),
      avtar: Joi.string(),
      area: Joi.string()
    },
    params: {
      wholeFansName: Joi.string().required()
    }
  }
};
