const crypto = require('crypto');

const hashPassword = password =>
  crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

const myAdapter = () => ({
  async login(req, res) {
    const {username, password} = req.body;

    if (
      username === process.env.ADMIN_USER &&
      hashPassword(password) === process.env.ADMIN_PASSWORD_HASH
    ) {
      return {
        id: 666,
        username,
        groups: ['admin']
      };
    }

    return false;
  },

  async logout() {
    return true;
  }
});

module.exports = myAdapter;
