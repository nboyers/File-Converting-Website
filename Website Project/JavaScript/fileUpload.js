const AWS = require('aws-sdk')

//Bucket Configurations

let  bucketName     =  BUCKET_REGION;
let  bucketRegion   =  BUCKET_NAME;
let  IdentityPoolId =  IDENTITY_POOL_ID;

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName }
});

//Function to upload files to the S3 bucket
function s3upload() {
  var files = document.getElementById('fileUpload').files;
  if (files) 
  {
    var file = files[0];
    var fileName = file.name;
    var filePath = 'ift301-file-converter-bucket/' + fileName;
    var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/tmp/' +  filePath;
    s3.upload({
       Key: filePath,
       Body: file,
       ACL: 'public-read'
       }, function(err, data) {
       if(err) {
       reject('error');
       }
       alert('Successfully Uploaded!');
       }).on('httpUploadProgress', function (progress) {
       var uploaded = parseInt((progress.loaded * 100) / progress.total);
       $("progress").attr('value', uploaded);
     });
  }
};


