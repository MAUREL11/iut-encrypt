'use strict';

module.exports = {
    method: 'post',
    path: '/user/create',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            return userService.hello({ firstName: 'John' });
        },
        tags : ['api']

    },
};
