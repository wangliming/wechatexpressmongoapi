import Fans from '../models/fans.model';

/**
 * Load fans and append to req.
 */
function load(req, res, next, name) {
  Fans.getfansbyname(name)
  .then((fans) => {
    req.fans = fans; // eslint-disable-line no-param-reassign
    return next();
  })
  .catch(e => next(e));
}
function loadbyid(req, res, next, id){
  Fans.get(id)
  .then((fans) => {
    req.fans = fans; // eslint-disable-line no-param-reassign
    return next();
  })
  .catch(e => next(e));
}
function loadbyname(req, res, next, name) {
  Fans.getfansbyregexname(name)
  .then((fans) => {
    req.fans = fans; // eslint-disable-line no-param-reassign
    return next();
  })
  .catch(e => next(e));
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
  const fans = new Fans({
    name: req.body.name,
    phone: req.body.phone,
    avtar: req.body.avtar,
    area: req.body.area
  });

  fans.save()
    .then(savedFans => res.json(savedFans))
    .catch(e => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.name - The username of user.
 * @property {string} req.body.phone - The mobileNumber of user.
 * @returns {User}
 */
function update(req, res, next) {
  const fans = req.fans;
  fans.name = req.body.name;
  fans.phone = req.body.phone;

  fans.save()
    .then(savedFans => res.json(savedFans))
    .catch(e => next(e));
}

/**
 * Get Fans list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Fans.list({ limit, skip })
    .then(fans => res.json(fans))
    .catch(e => next(e));
}


export default { load, loadbyname,loadbyid, get,update, create, list };