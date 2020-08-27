var configuration = {
    frameworks: ["jasmine", "karma-typescript"],

    files: [
        'Angular-csv.spec.ts',
        'Angular-csv.ts'
    ],

    preprocessors: {
        "**/*.ts": ["karma-typescript"]
    },

    reporters: ["progress", "karma-typescript"],
    customLaunchers: {
        ChromeHeadlessNoSandbox: {
            base: 'ChromeHeadless',
            flags: ['--no-sandbox']
        }
    },
    browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox']
};

if (process.env.TRAVIS) {
    configuration.browsers = ['ChromeHeadlessNoSandbox'];
}


module.exports = function (config) {
    config.set(configuration);
};


