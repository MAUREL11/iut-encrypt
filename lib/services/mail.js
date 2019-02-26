'use strict';

const { Service } = require('schmervice');

module.exports = class MailService extends Service {


    async getAllUsers() {
        const {User} = this.server.models();
        const users = await User.query();
        return users;
    };


};