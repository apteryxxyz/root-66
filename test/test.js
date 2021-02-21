const assert = require('assert');

describe('SixtySix', function () {
    const sixty = require('..'),
        path = require('path'),
        { name, description, version } = require('../package.json'),
        pathParts = module.filename.split(path.sep);

    describe('root', function () {
        it('should return the root path of the app', function () {
            assert(sixty.root, sixty.root);
        })
    })

    describe('cwd', function () {
        it('should return the current working directory', function () {
            assert(sixty.cwd, process.cwd());
        })
    })

    describe('sep', function () {
        it('should return OS path seperator', function () {
            assert(sixty.sep, path.sep);
        })
    })

    describe('package', function () {
        it('should return the contents of the package.json file in the root', function () {
            const package = require(path.join(sixty.root, 'package.json'));
            assert(package, sixty.package);
        })
    })

    describe('file', function () {
        describe('name', function () {
            it('should return the name of the current file', function () {
                assert(sixty.file.name, pathParts.pop());
            })
        })

        describe('path', function () {
            it('should return the path to the current file', function () {
                assert(sixty.file.path, pathParts.join(path.sep));
            })
        })

        describe('extension', function () {
            it('should return the extension of the current file', function () {
                assert(sixty.file.extension, module.filename.split(path.sep).pop().split('.').pop());
            })
        })

        describe('exports', function () {
            it('should return the module exports of the current file', function () {
                assert(sixty.file.exports, module.exports);
            })
        })
    })

    describe('module', function () {
        it('should return an object containing this modules name, description and version', function () {
            assert(sixty.module, { name, description, version })
        })
    })
})
