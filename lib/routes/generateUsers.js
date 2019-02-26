'use strict';
const Joi = require('joi');
const Boom = require('boom');
const userSchema = require('../schemas/user');

module.exports = {
    method: 'POST',
    path: '/users/generate',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            const { securityService } = request.services();
            return await userService.generateUsers(100,securityService);
        },
        tags : ['api']

    },
};
