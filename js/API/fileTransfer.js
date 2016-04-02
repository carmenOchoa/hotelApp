//fileTranfer.js
var ft = {
    obj: new FileTransfer(),
    win: function (r) {
        /*console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);*/
        if(r.response == 1){
            window.localStorage.setItem("user",$('#regNom').val());
            window.location.href = '#home';
        }
    },
    fail: function (error) {
        alert("An error has occurred: Code = " + error.code);
    },
    transfer: function(fileURL){
        var options = new FileUploadOptions();
        options.fileKey = "foto";
        options.fileName = " carmen";
        options.mimeType = "image/jpeg";
        
        ft.obj.upload(fileURL, "http://carlos.igitsoft.com/apps/test.php", ft.win, ft.fail, options);
    }  
};