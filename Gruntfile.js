module.exports = function(grunt) {
    grunt.initConfig({
        bump: {
          options: {
            files: ['bower.json', 'juicy-markdown.html'],
            commit: true,
            commitMessage: '%VERSION%',
            commitFiles: ['bower.json', 'juicy-markdown.html'],
            createTag: true,
            tagName: '%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: false,
            // pushTo: 'origin',
            globalReplace: false,
            prereleaseName: false,
            regExp: false
          }
        }
    });
    grunt.loadNpmTasks('grunt-bump');
};
