'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const fractal = require('@frctl/fractal').create();

fractal.set('project.title', 'Component');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Ricardo Brina Mondardo');

fractal.web.set('static.path', __dirname + '/src/public');
fractal.web.set('builder.dest', 'dist');

fractal.docs.set('path', `${__dirname}/src/docs`);
fractal.components.set('path', `${__dirname}/src/components`);

fractal.web.set('server.port', 3000); 

const logger = fractal.cli.console;

gulp.task('sass', () => {
    return gulp.src( `${__dirname}/src/public/scss/styles.scss`)
    .pipe(sass())
    .pipe(gulp.dest(`${__dirname}/src/public/css`))
});

gulp.task('watch', () => {
    gulp.watch(`${__dirname}/src/public/**/*.scss`, ['sass'])
});        

gulp.task('start',function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

gulp.task('build', ['sass','start'] ,function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});