var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('webserver', function() {
    return gulp.src('./src/')
        .pipe(webserver({
            open: true,
            port: 8989,
            livereloda: true,
            proxies: [{
                source: 'api/find',
                target: 'http://localhost:3000/api/find'
            }, {
                source: 'api/insert',
                target: 'http://localhost:3000/api/insert'
            }, {
                source: 'api/findly',
                target: 'http://localhost:3000/api/findly'
            }]
        }))
})