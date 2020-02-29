//better way of callbacks

// let p = new Promise(function(resolve, reject){
//     console.log('execution starts');
//     setTimeout(function(){
//         let result = 'R';
//         resolve(result);
//     },3000)
// });

//.dot ke andar wala function tab call hota hai jab resolve wala function call hota hai
// p.then(function(result){
//     console.log('execution completed '+result);
// })

function downloadfile(url){
    return new Promise(function(resolve, reject){
        if(!url.startsWith('http')) throw new Error('not a valid url');
        console.log('download starts');
        setTimeout(function(){
            let file_name = url.split('/').pop();
            resolve(file_name);
        }, 3000)
    });
}

// //upload function:
function compressfile(file_name){
    return new Promise(function(resolve, reject){
        // if(-1 == [mp4,flv,web].indexOf(file_name.split('.').pop())) throw new Error('not valid format')
        console.log('compress starts ');
        setTimeout(function(){
            let compress_file = file_name.split('.')[0]+'.zip';
            resolve(compress_file);
        },3000)
    })
}


// //upload function:
function uploadfile(compress_file){
    return new Promise(function(resolve, reject){
        console.log('upload starts');
        let uploadpath = 'http://abc.com'+compress_file;
        resolve(uploadpath)
    },3000)
}

downloadfile('http://example.com/file.mp4')
    .then(compressfile)
    .then(uploadfile)
    .then(function(){
        console.log('ERROR')
    })

// downloadfile('http://example.com/file.mp4')
//     .then(function(file_name){
//         console.log('download completed '+file_name);
//         compressfile(file_name)
//     .then(function(compress_file){
//         console.log('compress completed '+compress_file);
//         uploadfile(compress_file)
//     .then(function(uploadpath){
//         console.log('upload completed '+uploadpath);        
//     })
//     })
// })




// function downloadfile(url){
//      let p =  new Promise(function(resolve, reject){
//         if(!url.startsWith('http')) throw new Error('not a valid url');
//         console.log('download starts');
//         setTimeout(function(){
//             let file_name = url.split('/').pop();
//             resolve(file_name);
//         }, 3000)
//     });
//     setTimeout(function(){
//         p.then(function(){
//             console.log('finally');
//         });
//     }, 1000);}


//.....................................................
// kartik sir verison of above prog:
//.....................................................

// let p = new Promise(function(resolve, reject) {
// 	console.log("Download starts")
// 	setTimeout(function() {
// 		resolve()
// 	}, 3000)
// })

// setTimeout(function() {
// 	p.then(function() {
// 		console.log("Finally done")
// 	})
// }, 1000)

// -------------------------------------------------------------------
// function downloadFile(url){
//     return new Promise(function(resolve,reject){
//         if(!url.startsWith('http')) reject(new Error('Not a valid url'));
//         console.log('Download Starts');
//         setTimeout(function(){
//             let file_name = url.split('/').pop();
//             console.log('Download completed '+file_name);
//             resolve(file_name);
//         },3000)
//     });
// }

// function compressFile(file_name){
//     return new Promise(function(resolve,reject){
//         if(-1 == ['mp4','flv','webm'].indexOf(file_name.split('.').pop())) throw new Error('We can only compress video files');
//         console.log('Compression begins');
//         setTimeout(function(){
//             let compress_file_name=file_name.split('.')[0]+'.zip';
//             console.log('Compression completed '+compress_file_name);
//             resolve(compress_file_name);
//         },3000)
//     })
// }

// function uploadFile(compress_file_name){
//     return new Promise(function(resolve,reject){
//         console.log('Uploading starts');
//         setTimeout(function(){
//             let upload_path = 'http://abc.com/'+compress_file_name;
//             console.log('File uploaded at '+upload_path);
//             resolve(upload_path);
//         },3000)
//     })
// }

// downloadFile('http://example.com/file.mp4')
//     .then(compressFile)
//     .then(uploadFile)
//     .then(function(){
//         console.log('All done');
//     })
//     .catch(function(error){
//         console.log(error.message);
//     })

// downloadFile('http://example.com/file.mp4')
//     .then(function(file_name){
//         console.log('Download completed '+file_name);
//         compressFile(file_name)
//             .then(function(compress_file_name){
//                 console.log('Compression completed '+compress_file_name);
//                 uploadFile(compress_file_name)
//                     .then(function(upload_path){
//                         console.log('File uploaded at '+upload_path);
//                     })
//             })
//     })
// -------------------------------------------------------------------

// let p = new Promise(function(resolve,reject){
//     console.log('Execution starts');
//     throw new Error('There is an error');
//     setTimeout(function(){
//         let result = 'R';
//         resolve(result);
//     },3000)
// });

// p.then(function(result){
//     console.log('Execution completed '+result);
// })
// .catch(function(error){
//     console.log(error.message);
// })