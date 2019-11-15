const chalk = require('chalk')
const yargs = require('yargs')
const fileCrud = require('./fileCrud.js')

const log = function(msg) {
    if (typeof msg === 'string') {
        console.log(chalk.blue.inverse(msg))
    } else {
        console.log(msg)
    }
}

yargs.command({
    command: 'list',
    describe: 'List all json entries from file',
    builder: {
        fileName: {
            describe: 'file name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { fileCrud.listJsonFromFile(argv.fileName)    }
})

yargs.command({
    command: 'clear',
    describe: 'Clear all json entries from file',
    builder: {
        fileName: {
            describe: 'file name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { fileCrud.clearJsonFromFile(argv.fileName)}
})

yargs.command({
    command: 'get',
    describe: 'Get single Json entry from file',
    builder: {
        id: {
            describe: 'unique identifier',
            demandOption: true,
            type: 'string'
        },
        fileName: {
            describe: 'file name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { fileCrud.getJsonFromFile(argv.id, argv.fileName)}
})

yargs.command({
    command: 'add',
    describe: 'Add single json entry to file',
    builder: {
        id: {
            describe: 'unique identifier',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        },
        fileName: {
            describe: 'file name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { fileCrud.addJsonToFile(argv.id, argv.body, argv.fileName)}
})

yargs.command({
    command: 'edit',
    describe: 'Edit single Json entry from file',
    builder: {
        id: {
            describe: 'unique identifier',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        },
        fileName: {
            describe: 'file name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { fileCrud.editJsonFromFile(argv.id, argv.body, argv.fileName)}
})

yargs.command({
    command: 'remove',
    describe: 'Remove single Json entry from file',
    builder: {
        id: {
            describe: 'unique identifier',
            demandOption: true,
            type: 'string'
        },
        fileName: {
            describe: 'file name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { fileCrud.removeJsonFromFile(argv.id, argv.fileName) }
})

yargs.parse()

