const fs = require('fs')
const chalk = require('chalk')
const path = require('path')

const filePath = path.join(__dirname, '../files/')


const log = function(msg) {
    if (typeof msg === 'string') {
        console.log(chalk.bgBlue(msg))
    } else {
        console.log(msg)
    }
}

const err = function(msg) {
    if (typeof msg === 'string') {
        console.log(chalk.red.inverse(msg))
    } else {
        console.log(chalk.red(msg))
    }
}

const fileExists = (fileName) => {
    return fs.existsSync(path.join(filePath, fileName))    
}

const loadEntries = (fileName) => {    
    try
    {
        if (fileExists(fileName)) {
            const fileJSONBUFFER = fs.readFileSync(path.join(filePath, fileName))
            const fileJSON = fileJSONBUFFER.toString()
            return JSON.parse(fileJSON)
        } else {
            err('File does not exist!')
            return []
        }
    }
    catch(e) {
        err(e.toString())
        return []
    }
}

const saveEntries = (jsonArray, fileName) => {
    try
    {
        const jsonString = JSON.stringify(jsonArray)
        fs.writeFileSync(path.join(filePath, fileName), jsonString)
        return true
    }
    catch(e) {
        err(e.toString())
        return false
    }
}

module.exports.listJsonFromFile = (fileName) => {
    const entries = loadEntries(fileName)
    if (entries.length > 0) {
        log('List of entries')
        log(entries)        
    } else {
        log('No entries')
    }
    return entries
}

module.exports.clearJsonFromFile = (fileName) => {    
    const entries = loadEntries(fileName)
    if (entries.length > 0) {
        saveEntries([], fileName)
        // fs.writeFileSync(fileName, )
        log('All entries have been removed.')    
        const entries = this.listJsonFromFile(fileName)
        // const entries = loadEntries(fileName)
        // if (entries.length > 0) {
        //     log('List of entries')
        //     log(entries)        
        // } else {
        //     log('No entries')
        // }        
    } else {
        log('No json objects to clear from file')
    }
    return entries
}

module.exports.getJsonFromFile = (id, fileName) => {
    const entries = loadEntries(fileName)
    if (entries.length > 0) {
        const existEntry = entries.find((entr) => entr.id === id)

        if (existEntry) {
            return entry[0]
        } else {
            err('Failed to get entry.  Entry does not exist.')
        }
    } else {
        log('No json objects to get from file')
    }
}

module.exports.addJsonToFile = (id, body, fileName) => {
    const entries = loadEntries(fileName)
    console.log(entries)
    const existEntry = entries.find((entr) => entr.id === id)

    if (!existEntry) {
        entries.push({
            id: id,
            body: body
        })
        if (saveEntries(entries, fileName)) {
            log('Entry added')
            log(entries)
        } else {
            err('Failed to write entries')
        }
    } else {
        err('Failed to add entry.  Entry already exists.')
    }
}

module.exports.editJsonFromFile = (id, body, fileName) => {
    const entries = loadEntries(fileName)
    if (entries.length > 0) {
        const newEntries = []
        let entryFound = false

        entries.forEach(function (entry) {
            if (entry.id === id) {
                log('Entry found and changed')
                entry.body = body
                entryFound = true
            }
            newEntries.push(entry)
        })

        if (!entryFound) {
            err('Failed to edit entry.  Entry not found.')
        } else {
            if (saveEntries(entries, fileName)) {
                log(entries)
            } else {
                err('Failed to write entries')
            }
        }
    } else {
        log('No json objects to get from file')
    }
}

module.exports.removeJsonFromFile = (id, fileName) => {
    const entries = loadEntries(fileName)
    if (entries.length > 0) {
        const idToRemove = entries.filter(function (entry) {
            return entry.id === id
        })
        if (idToRemove.length === 1) {
            const remainEntries = entries.filter(function (entry) {
                return entry.id !== id
            })

            if (saveEntries(remainEntries, fileName)) {
                log('Entry removed.')
                log(remainEntries)
            } else {
                err('Failed to write entries.')
            }
        } else {
            err('Failed to remove entry.  Entry not found.')
        }
    } else {
        log('No json objects to get from file')
    }
}
   



