const myAdapter = (core, config) => ({
  async login(req, res) {
    const {username, password} = req.body;

    if (username === 'eli' && password === 'catdog3241') {
      return {id: 666, username, groups: ['admin']};
    }

    return false;
  },

  async logout(req, res) {
    return true;
  }
});

module.exports = myAdapter;
