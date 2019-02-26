

'use strict';

const Joi = require('joi');
const Boom = require('boom');
const userSchema = require('../schemas/user');


module.exports = {
    method: 'put',
    path: '/user/{id}',
    options: {

        handler: async (request, h) => {
            const { userService } = request.services();
            const { securityService } = request.services();
            var userToUpdate = await userService.updateUser(request.params,request.payload,securityService);
            if (userToUpdate) {
                return h.response(userToUpdate).code(201);
            }
            else {
                return Boom.notFound('L\'utilisateur recherché n\'a pas été trouvé');
            }
        },

        validate:{
            payload:{
                userSchema
            },
            params:{
                id: Joi.number()
            }
        },
        tags : ['api']
    }
};