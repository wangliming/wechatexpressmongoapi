import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import { Stream } from 'stream';

/**
 * Fans Schema
 */
const FansSchema = new mongoose.Schema({
  fid: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  alias: {
    type: String
  },
  area: {
    type: String
  },
  avatar: {
    type: String
  },
  city: {
    type: String
  },
  province: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  official: {
    type: Boolean,
    required: true
  },
  sex: {
    type: Number,
    required: true
  },
  signature:{
    type: String
  },
  special: {
    type: Boolean
  },
  star: {
    type: Boolean
  },
  strange: {
    type: Boolean
  },
  weixin: {
    type: String
  },
  uin: {
    type: Number
  },
  customerid: {
    type: String
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
FansSchema.method({
});

/**
 * Statics
 */
FansSchema.statics = {
  getfansbyname(name){
    return this.findOne({name:name}).exec().then((fans) => {
      if(fans){
        return fans;
      }
      const err = new APIError('No such fans exists!', httpStatus.NOT_FOUND);
      return Promise.reject(err);
    });
  },
  getfansbyregexname(name){
    var regex = new RegExp(name, 'i');
    return this.find({name:regex}).exec().then((fanslist) => {
        if(fanslist){
            return fanslist;
        }
        const err = new APIError('No such fans exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
    });
  },
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(fid) {
    return this.find({fid:fid})
      .exec()
      .then((fans) => {
        if (fans) {
          return fans;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },
  
  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50, customerid = false } = {}) {
    return this.find({customerid:customerid})
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Fans
 */
export default mongoose.model('Fans', FansSchema);
