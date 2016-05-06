// Use DefinePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.

if (process.env.NODE_ENV == 'production') { //发布产品
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}