function otherName()
{


}

function gitrepo() {


    var input = document.getElementById("input").value;
    // alert(input);
    var url = (input + "/archive/refs/heads/main.zip");
    var myURL = decodeURI(url);
    window.location=myURL;

}