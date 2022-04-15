//    https://medium.com/@fakiolinho/handle-blobs-requests-with-axios-the-right-way-bb905bdb1c04

// const fileSaver = require('utils/fileSaver');
// const fileReader = require('utils/fileReader');
// const { downloadFileRequest } = require('https://registry.verra.org/uiapi/resource/resource/search?$skip=0&count=true&$format=pdf&$exportFileName=allprojects.pdf');
// // import * as types from './actionTypes';
// const types = require('./actionTypes');

// const downloadFile = id => async dispatch => {
//   try {
//     dispatch({
//       type: types.DOWNLOAD_FILE_REQUEST,
//     });

//     const { data } = await downloadFileRequest(id);
    
//     await fileSaver(data, 'fileName.txt');

//     dispatch({
//       type: types.DOWNLOAD_FILE_SUCCESS,
//     });

//     alert('File downloaded successfully!');
//   } catch (error) {
//     dispatch({
//       type: types.DOWNLOAD_FILE_ERROR,
//     });
    
//     if (error.response) {
//       try {
//         const { data } = error.response;
//         // Read file
//         const file = await fileReader(data);
//         // Parse content and retrieve 'message'
//         const { message } = JSON.parse(file);

//         alert(message);
//       } catch (readError) {
//         // Show a dummy error if sth goes wrong while retrieving 'message'
//         alert('Something went wrong while downloading this file');
//       }
//     } else {
//       alert('Something went wrong while downloading this file');
//     }
//   }
// };