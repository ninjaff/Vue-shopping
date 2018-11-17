module.exports = (opt, app) => {
    return async (ctx, next) => {
        if (ctx.session.login != 1) { // 没有登录
            const arr = ['/register', '/recommend', '/login', '/search','/']
            if (arr.includes(ctx.url) || ctx.url.includes('/classification') || ctx.url.includes('/goods/one')) {
                await next()
                return 
            }
            ctx.body = {
                msg: '请登录',
                status: -1
            }
        } else {
            await next()
        }
    }
}