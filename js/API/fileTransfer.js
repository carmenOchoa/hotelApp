//fileTranfer.js
var ft = {
    //obj: new FileTransfer(),
    win: function (r) {
        if(r.response == 1){
            window.localStorage.setItem("user",$('#regNom').val());
            window.location.href = '#home';
        }
    },
    fail: function (error) {
        alert("An error has occurred: Code = " + error.code);
    },
    transfer: function(fileURL){
        alert(fileURL);
        var options = new FileUploadOptions();
        options.fileKey = "foto";
        options.fileName = "carmen";
        options.mimeType = "image/jpeg";
        
        var ft2 = new fileTransfer();
        ft2.upload(fileURL, "http://carlos.igitsoft.com/apps/test.php", ft.win, ft.fail, options);
    }  
};