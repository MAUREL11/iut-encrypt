

'use strict';

const userSchema = require('../schemas/user');
module.exports = {
    method: 'post',
    path: '/user',
    options: {

        handler: async (request, h) => {

            const { userService } = request.services();
            const { securityService } = request.services();
            let userCreated = await userService.createUser(request.payload,securityService);
            return h.response(userCreated).code(201);


        },
        validate:{
            payload:{
                userSchema
            }
        },
        tags : ['api']
    }
};