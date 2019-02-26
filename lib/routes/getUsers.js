'use strict';

module.exports = {
    method: 'get',
    path: '/users',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            return await userService.getAllUsers();
        },
        tags : ['api']

    },
};
