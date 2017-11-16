'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fans = require('../models/fans.model');

var _fans2 = _interopRequireDefault(_fans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Load fans and append to req.
 */
function load(req, res, next, name) {
  _fans2.default.getfansbyname(name).then(function (fans) {
    req.fans = fans; // eslint-disable-line no-param-reassign
    return next();
  }).catch(function (e) {
    return next(e);
  });
}
function loadbyid(req, res, next, id) {
  _fans2.default.get(id).then(function (fans) {
    req.fans = fans; // eslint-disable-line no-param-reassign
    return next();
  }).catch(function (e) {
    return next(e);
  });
}
function loadbyname(req, res, next, name) {
  _fans2.default.getfansbyregexname(name).then(function (fans) {
    req.fans = fans; // eslint-disable-line no-param-reassign
    return next();
  }).catch(function (e) {
    return next(e);
  });
}
/**
 * Get fans
 * @returns {Fans}
 */
function get(req, res) {
  return res.json(req.fans);
}

/**
 * Create new Fans
 * @property {string} req.body.Fansname - The Fansname of Fans.
 * @property {string} req.body.mobileNumber - The mobileNumber of Fans.
 * @returns {Fans}
 */
function create(req, res, next) {
  var fans = new _fans2.default({
    name: req.body.name,
    phone: req.body.phone,
    avtar: req.body.avtar,
    area: req.body.area
  });

  fans.save().then(function (savedFans) {
    return res.json(savedFans);
  }).catch(function (e) {
    return next(e);
  });
}

/**
 * Update existing user
 * @property {string} req.body.name - The username of user.
 * @property {string} req.body.phone - The mobileNumber of user.
 * @returns {User}
 */
function update(req, res, next) {
  var fans = req.fans;
  fans.name = req.body.name;
  fans.phone = req.body.phone;

  fans.save().then(function (savedFans) {
    return res.json(savedFans);
  }).catch(function (e) {
    return next(e);
  });
}

/**
 * Get Fans list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  var _req$query = req.query,
      _req$query$limit = _req$query.limit,
      limit = _req$query$limit === undefined ? 50 : _req$query$limit,
      _req$query$skip = _req$query.skip,
      skip = _req$query$skip === undefined ? 0 : _req$query$skip;

  _fans2.default.list({ limit: limit, skip: skip }).then(function (fans) {
    return res.json(fans);
  }).catch(function (e) {
    return next(e);
  });
}

exports.default = { load: load, loadbyname: loadbyname, loadbyid: loadbyid, get: get, update: update, create: create, list: list };
module.exports = exports['default'];
//# sourceMappingURL=fans.controller.test.js.map
