'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fans = require('../models/fans.model');

var _fans2 = _interopRequireDefault(_fans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uploadfans(req, res, next) {
  console.log(req.body);

  var data = req.body;
  var curuser = data.curuser;
  var fanslist = data.fanslist;
  if (!curuser) {
    return;
  }
  // 插入当前主用户
  findandupdate(curuser, function (error, docs) {
    console.log(error);
    console.log(docs);
  });
  if (!fanslist) {
    return;
  }
  // 插入主用户的粉丝
  for (var i = 0; i < fanslist.length; i++) {
    var fdata = fanslist[i];
    findandupdate(fdata);
  }
  res.json({ status: 'success' });
}
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
function findandupdate(fansobj) {
  // Model.insertMany
  _fans2.default.findOneAndUpdate({ fid: fansobj.fid }, fansobj, { upsert: true }, function (err, results, stats) {
    console.log(results);
  });
}
function create(fanobj) {
  var fans = new _fans2.default({
    fid: fanobj.fid,
    address: fanobj.address,
    alias: fanobj.alias,
    avatar: fanobj.avatar,
    city: fanobj.city,
    province: fanobj.province,
    name: fanobj.name,
    official: fanobj.official,
    sex: fanobj.sex,
    signature: fanobj.signature,
    special: fanobj.special,
    star: fanobj.star,
    strange: fanobj.strange,
    weixin: fanobj.weixin,
    uin: fanobj.uin,
    customerid: fanobj.customerid,
    mid: fansobj.mid,
    pid: fanobj.pid,
    fip: fansobj.fip
  });

  fans.save();
}
function loadbyid(req, res, next, fid) {
  _fans2.default.get(fid).then(function (fans) {
    req.fans = fans; // eslint-disable-line no-param-reassign
    return next();
  }).catch(function (e) {
    return next(e);
  });
}
function list(req, res, next) {
  var _req$body = req.body,
      _req$body$limit = _req$body.limit,
      limit = _req$body$limit === undefined ? 50 : _req$body$limit,
      _req$body$skip = _req$body.skip,
      skip = _req$body$skip === undefined ? 0 : _req$body$skip,
      _req$body$customerid = _req$body.customerid,
      customerid = _req$body$customerid === undefined ? false : _req$body$customerid;

  _fans2.default.list({ limit: limit, skip: skip, customerid: customerid }).then(function (fans) {
    return res.json(fans);
  }).catch(function (e) {
    return next(e);
  });
}

exports.default = { uploadfans: uploadfans, list: list };
module.exports = exports['default'];
//# sourceMappingURL=fans.controller.js.map
