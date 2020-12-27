/**
 * aqui que começa tudo
 */

const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },

  account: {
    type: String,
    required: true,
  }
});

module.exports = {
  Accounts: mongoose.model('accounts', accountSchema),
};