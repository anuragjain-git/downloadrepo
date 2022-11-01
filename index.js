function gitrepo() {

    var input = document.getElementById("input").value;
    var url = (input + "/archive/refs/heads/main.zip");

    var x = input.slice(0,1);
    if (x !='h') {
        url = ("https://"+ input + "/archive/refs/heads/main.zip");
    }
    
    var myURL = decodeURI(url);
    window.location=myURL;

}
