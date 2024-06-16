const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))

// In this code snippet, a read stream is created using Node.js's createReadStream method to read a file named big.txt. The stream is then set up to handle the 'data' and 'error' events.

// const { createReadStream } = require('fs'): 
// This line imports the createReadStream method from the native Node.js 'fs' module to work with files.

// const stream = createReadStream('./content/big.txt'):
//  Here, a read stream named stream is created for the file 'big.txt' located in the './content/' directory. By default, the stream will read data in chunks, and the size of each chunk is determined by the operating system.

// stream.on('data', (result) => { console.log(result) }): 
// This code sets up an event listener for the 'data' event that is emitted when a new chunk of data is available to be read from the file. When data is received, the chunk is logged to the console.

// stream.on('error', (err) => console.log(err)):
// Here, an event listener is set up for the 'error' event that is emitted if an error occurs during reading the file. If an error occurs, the error message is logged to the console.

// By setting up these event listeners, the code is prepared to handle both successful data reading and potential errors that may occur during the file reading process.