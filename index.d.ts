/**
 * @property {string} root              - Root directory of this app.
 * @property {string} cwd               - The current working directory.
 * @property {object} package           - The contents of the package.json file of this app.
 * 
 * @property {object} file              - An object containing properties related to the current file and its path.
 * @property {string} file.name         - The name excluding extensions.
 * @property {string} file.fullName     - The full name.
 * @property {string} file.path         - Complete file path.
 * @property {string} file.extension    - File extension.
 * @property {object} file.exports      - Files module exports.
 */
declare const SixtySix: {
    /**
     * Root directory of this app.
     */
    root: String;

    /**
     * The current working directory.
     */
    cwd: String;

    /**
     * Your OS's path seperator.
     */
    sep: String;

    /**
     * The contents of the package.json file of this app.
     */
    package: Object;

    /**
     * An object containing properties related to the current file and its path.
     */
    file: {
        /**
         * The name of the file.
         */
        name: String;

        /**
         * The path to the file.
         */
        path: String;

        /**
         * File extension.
         */
        extension: String;

        /**
         * Files module exports.
         */
        exports: Object;
    }

    /**
     * An object containing this modules name, description, and version
     */
    module: {
        /**
         * The name of this module.
         */
        name: String;

        /**
         * The description of this module.
         */
        description: String;

        /**
         * The currently installed version of this module.
         */
        version: String;
    }
}

export = SixtySix;