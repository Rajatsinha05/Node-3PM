// core module
const fs = require('fs');


const createFile = () => {
    fs.writeFile("test.txt", "node js", (err) => {
        if (err) {
            console.log("Error creating");
        }
        else {
            console.log("Created");
        }
    })

}


const deleteFile = () => {

    fs.unlink("test.css", (err) => {
        if (err) {
            console.log("Error deleting");
        }
        else {
            console.log("Deleted");
        }
    })

}

deleteFile()
// createFile()