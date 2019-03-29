const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? "/mj-ui/dist/" : "/",
    chainWebpack: config => {
        config.resolve.alias.set("~", path.resolve('packages'));
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    }
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, 'src/assets/theme/base.scss'),
                path.resolve(__dirname, 'src/assets/theme/page.scss')
            ]
        })
}