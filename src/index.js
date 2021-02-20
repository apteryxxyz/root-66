// tested on Windows 10 and Raspberry Pi 4
const { _findPath: findPath } = require('module'),
    { resolve, join, sep, dirname } = require('path');

function findRoot() {
    // if process.env.ROOT_SIXTY_SIX already exists, return it
    if (process.env.ROOT_SIXTY_SIX) return process.env.ROOT_SIXTY_SIX;

    // directory that this file belongs to
    const dir = dirname(module.filename);

    // directory path split at the folder 'node_modules' the first item is usually the root of the project
    const nodeModulesPaths = dir.split('node_modules'),
        nodeModulesRoot = resolve(nodeModulesPaths[0]);

    // dir split by the path.sep ('/', '\\')
    const pathParts = dir.split(sep);

    // pathParts mapped to include the path.sep ('/', '\\') at the start of each item apart from the first, ('', 'C:')
    const mappedParts = pathParts.map(p => pathParts.indexOf(p) === 0 ? p : sep + p);

    // perpare variables for later
    let final = '', findPathRoot = false;

    // loop though all the parts of mappedParts
    for (let i = 0; i < mappedParts.length; i++) {
        // add mapped part to the final variable
        final = final + mappedParts[i];

        // run the findPath function with the new final variable, if true and findPathRoot is false set new value
        // im unsure as to how the findPath function works but after testing it, it has every time
        if (findPath(final) && !findPathRoot) findPathRoot = final;
    }

    // if nodeModulesRoot does not equal the current directory, AKA 'node_modules' exists in the directory
    // and nodeModulesPaths is equal to 2, AKA there is only one 'node_modules' in the path
    if (nodeModulesRoot !== dir && nodeModulesPaths.length === 2) return nodeModulesRoot;

    // if findPathRoot is not false, return it
    else if (findPathRoot !== false) return findPathRoot;

    // if all else fails, return working directory
    else return process.cwd();
}

function findPackageJson() {
    // define root path, if no env variable run findRoot function
    const root = process.env.ROOT_SIXTY_SIX || findRoot();

    // join root path with 'package.json', where the file should be
    const packagePath = join(root, 'package.json');

    // try to return contents of 'package.json' file
    return (function () {
        try {
            // require the 'package.json' file
            return require(packagePath);
        } catch (error) {
            // if error return an object with that error
            return { error };
        }
    })();
}

module.exports = new class SixtySix {
    constructor() {
        // find root and define it
        const root = findRoot();

        // if module.parent exists
        if (module.parent) {
            // file path split into parts
            const pathParts = module.parent.filename.split(sep);
        
            // the last item in the path split by path.sep
            const name = pathParts.pop();

            // the path to the current file
            const path = pathParts.join(sep);

            // last item of the fullName usually the file extension split by '.'
            const extension = name.split('.').pop();

            // module.exports of the parent module
            const exports = module.parent.exports;

            // apply prevoiusly defined variables to class
            this.file = { name, path, extension, exports };
        }

        // apply root to class
        this.root = root;

        // apply path sep to class
        this.sep = sep;

        // apply root to process.env as ROOT_SIXTY_SIX
        process.env.ROOT_SIXTY_SIX;

        // apply current working directory to class
        this.cwd = process.cwd();

        // apply package.json file content to class
        this.package = findPackageJson();

        // delete the require cache of this file
        delete require.cache[__filename];
    }
}
