'use strict';
const userSchema = require('../schemas/user');
const Joi = require('joi');
const Boom = require('boom');
module.exports = {
    method: 'get',
    path: '/user/{id}',

    options: {
        handler: async (request, h) => {
            const {userService} = request.services();
            var userToReturn = await userService.getUserById(request.params);
            if (userToReturn) {
                return h.response(userToReturn).code(200);
            }
            else {
                return Boom.notFound('L\'utilisateur recherché n\'a pas été trouvé');
            }
        },
        validate: {
            params: {
                id: Joi.number()
            }
        },

        tags: ['api']

    },
};
