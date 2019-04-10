const commandLineArgs = require('command-line-args')
const optionDefinitions = [
    { name: 'migrate', alias: 'm', type: Boolean },
    { name: 'seed', alias: 's', type: Boolean },
];

let options = false;
try {
    options = commandLineArgs(optionDefinitions)
} catch (error) {
    // yummy error
}


if (!options) {
    console.log('No command specified');
    process.exit();
}

if (options.migrate) {
    console.log('migrating...');
    console.log();
    const migrations = require('./migrations').migrations;
    (async () => await migrations())();
}

if (!options.migrate && options.seed) {
    console.log('seeding...');
    console.log();
    const seeder = require('./seeders').seeder;
    (async () => await seeder())();
}