const {
	src,
	dest
} = require('gulp');

const bs = require('browser-sync');

module.exports = function fonts() {
	src('src/fonts/**/*')
		.pipe(dest('build/fonts'))
    	.pipe(bs.stream())
}