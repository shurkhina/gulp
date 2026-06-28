const {
	src,
	dest
} = require('gulp');
const twig = require('gulp-twig');
const htmlbeautify = require('gulp-html-beautify');
const bs = require('browser-sync');

module.exports = function html() {
	return src(['src/**/*.twig', '!src/components/**/*.twig'])
		.pipe(twig())
		.pipe(htmlbeautify({
            indentSize: 4,
        }))
		.pipe(dest('build'))
    	.pipe(bs.stream())
}