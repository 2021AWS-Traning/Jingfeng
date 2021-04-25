const mongoose = require('mongoose');
const model = require("./model");

const UserModel = mongoose.model('Users', model.UsersSchema);

const add = async (req, res) => {
    try {
        await new UserModel({ name: 'Jingfeng' }).save();
        return res.send({
            status: 'success',
        });
      } catch (error) {
        return res.status(400).send({
          status: 'failure'
        });
      }
}

const findAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        return res.send({
            status: 'success',
            body: users && users.length ? users : []
        });
      } catch (error) {
        return res.status(400).send({
          status: 'failure'
        });
      }
};

module.exports = {
    add,
    findAll
}