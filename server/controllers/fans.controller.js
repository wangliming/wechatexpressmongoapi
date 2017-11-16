import Fans from '../models/fans.model';
function uploadfans(req, res, next){
  console.log(req.body)
  const data = req.body;
  // Fans.insertMany(data, function(error, docs){
  //   console.log(error)
  //   console.log(docs)
  // })
  for(let i=0;i<data.length;i++){
    const fdata = data[i];
    findandupdate(fdata);
  }
  res.json({status:'success'})
}
function update(req, res, next) {
  const fans = req.fans;
  fans.name = req.body.name;
  fans.phone = req.body.phone;

  fans.save()
    .then(savedFans => res.json(savedFans))
    .catch(e => next(e));
}
function findandupdate(fansobj){
  // Model.insertMany
  Fans.findOneAndUpdate({fid:fansobj.fid}, fansobj, {upsert:true}, function(err, results, stats){
    console.log(results);
  })
}
function create(fanobj) {
  const fans = new Fans({
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
    customerid: fanobj.customerid
  });

  fans.save();
}
function loadbyid(req, res, next, fid){
  Fans.get(fid)
  .then((fans) => {
    req.fans = fans; // eslint-disable-line no-param-reassign
    return next();
  })
  .catch(e => next(e));
}
function list(req, res, next) {
  const { limit = 50, skip = 0, customerid = false } = req.body;
  Fans.list({ limit, skip, customerid})
    .then(fans => res.json(fans))
    .catch(e => next(e));
}

export default { uploadfans, list };