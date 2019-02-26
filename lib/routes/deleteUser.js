'use strict';

const Joi = require('joi');
const Boom = require('boom')
const userSchema = require('../schemas/user');


module.exports = {
    method: 'delete',
    path: '/user/{id}',
    options: {

        handler: async (request, h) => {
            const {userService} = request.services();

            var userToDelete = await userService.deleteUser(request.params);
            if (userToDelete) {
                return h.response(userToDelete).code(204);
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
    }
};