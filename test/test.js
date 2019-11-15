const fileCrud = require('../src/fileCrud.js')
const fs = require('fs')
const path = require('path')

const testFile = 'testFile.json'


new Promise((test) => {
    console.log('START Tests')
    test()
})
.then(() => {    
    console.log('Remove file if exist')
    console.log(path.join(__dirname, '../files', testFile))
    if (fs.existsSync(path.join(__dirname, '../files', testFile))) {
        fs.unlinkSync(path.join(__dirname, '../files', testFile))
    }    
})
.then(() => {    
    console.log('TEST 1: listJsonFromFile ==> no file')
    fileCrud.listJsonFromFile(testFile)
})
.then(() => {
    console.log('TEST 2: clearJsonFromFile ==> no file')
    fileCrud.clearJsonFromFile(testFile)
})
.then(() => {
    console.log('TEST 3: getJsonFromFile ==> no file')
    fileCrud.getJsonFromFile('1', testFile)
})
.then(() => {
    console.log('TEST 4: editJsonFromFile ==> no file')
    fileCrud.editJsonFromFile('1', 'One', testFile)
})
.then(() => {
    console.log('TEST 5: removeJsonFromFile ==> no file')
    fileCrud.removeJsonFromFile('1', testFile)
})
.then(() => {
    console.log('TEST 6: addJsonToFile ==> no file')
    fileCrud.addJsonToFile('1', 'One', testFile)
})
.then(() => {
    console.log('TEST 7: addJsonToFile ==> file with 1 entry')
    fileCrud.addJsonToFile('1', 'One', testFile)     
})
.then(() => {
    console.log('TEST 8: listJsonFromFile ==> file with 1 entry')
    fileCrud.listJsonFromFile(testFile)
})
.then(() => {
    console.log('TEST 9: clearJsonFromFile ==> file with 1 entry')
    fileCrud.clearJsonFromFile(testFile)    
})
.then(() => {
    console.log('TEST 10: addJsonToFile ==> file with 1 entry')
    fileCrud.addJsonToFile('1', 'One', testFile)
})
.then(() => {
    console.log('TEST 11: editJsonFromFile ==> file with 1 entry, entry not exist')
    fileCrud.editJsonFromFile('2', 'One', testFile)
})
.then(() => {
    console.log('TEST 12: removeJsonFromFile ==> file with 1 entry, entry not exist')
    fileCrud.removeJsonFromFile('2', testFile)
})
.then(() => {
    console.log('TEST 13: editJsonFromFile ==> file with 1 entry, entry exist')
    fileCrud.editJsonFromFile('1', 'One', testFile)
})
.then(() => {
    console.log('TEST 14: removeJsonFromFile ==> file with 1 entry, entry exist')
    fileCrud.removeJsonFromFile('1', testFile)
})
.then(() => {
    console.log('TEST 15: addJsonToFile ==> file with 1 entry')
    fileCrud.addJsonToFile('1', 'One', testFile)
})
.then(() => {
    console.log('Remove file if exist')
    console.log(path.join(__dirname, '../files', testFile))
    if (fs.existsSync(path.join(__dirname, '../files', testFile))) {
        fs.unlinkSync(path.join(__dirname, '../files', testFile))
    }    
})
.then(() => {
    console.log('END Tests')
    return
})
.catch(() => {
    console.error('Test Failed')
})

