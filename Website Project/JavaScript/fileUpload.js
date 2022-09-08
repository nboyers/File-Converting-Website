const AWS = require('aws-sdk')

//Bucket Configurations
var bucketName = BUCKET_NAME;
var bucketRegion = BUCKET_REGION;
var IdentityPoolId = IDENTITY_POOL_ID;

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
  if (files) {
    var file = files[0];
    var fileName = file.name;
    var filePath = 'my-first-bucket-path/' + fileName;
    var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/my-first-bucket/' + filePath;
    
    s3.upload({
      Key: filePath,
      Body: file,
      ACL: 'public-read'
    }, function (err, data) {
      if (err) {
        reject('error');
      }

      alert('Successfully Uploaded!');
    }).on('httpUploadProgress', function (progress) {
      var uploaded = parseInt((progress.loaded * 100) / progress.total);
      $("progress").attr('value', uploaded);
    });
  }
};

