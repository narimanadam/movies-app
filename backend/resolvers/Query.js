const { forwardTo } = require('prisma-binding');

const Query = {
    movies: forwardTo('prisma')
}

module.exports = Query;