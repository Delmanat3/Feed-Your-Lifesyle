
const fs=require('fs')
const express = require('express')
//const app = express()
const { default: axios } = require('axios');
// const { buffer } = require('stream/consumers');

// Node.js program to demonstrate the	
// fs.write() method

// Include fs module
// const fs=require("fs");

// // File path where data is to be written
// // Here, we assume that the file to be in
// // the same location as the .js file
// var path = 'input.txt';

// // Declare a buffer and write the
// // data in the buffer
// let buffer = new Buffer.from('GeeksforGeeks: '
// 	+ 'A computer science portal for geeks\n');

// // The fs.open() method takes a "flag"
// // as the second argument. If the file
// // does not exist, an empty file is
// // created. 'a' stands for append mode
// // which means that if the program is
// // run multiple time data will be
// // appended to the output file instead
// // of overwriting the existing data.
// fs.open(path, 'a', function(err, fd) {

// 	// If the output file does not exists
// 	// an error is thrown else data in the
// 	// buffer is written to the output file
// 	if(err) {
// 		console.log('Cant open file');
// 	}else {
// 		fs.write(fd, buffer, 0, buffer.length,
// 				null, function(err,writtenbytes) {
// 			if(err) {
// 				console.log('Cant write to file');
// 			}else {
// 				console.log(writtenbytes +
// 					' characters added to file');
// 			}
// 		})
// 	}
// })

async function  init(){

    const queryUrl='https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=pasta&app_id=7f405668&app_key=eda4d42231735830901807b91c947c66&imageSize=LARGE&random=true&field=label&field=image&field=url&field=dietLabels'
    const resData = await axios.get(queryUrl)
    
    const data2=resData.data.hits
    console.log(data2)
    const data = JSON.stringify(data2)

    console.log(data)

    fs.writeFile('recipeData.json',data, (err) => {
      if (err){
        console.log(err)
      }else{
        console.log('The file has been saved!');
      }
      
    });
    }
    init()
   
