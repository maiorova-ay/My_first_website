var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 ==0) {
        document.getElementById("demo").innerHTML = "";
    }else {
        var img = document.createElement("img");
        img.src = "https://media1.tenor.com/m/dJj-zt5L8sAAAAAC/котик-мем-смешной-кот.gif";
        document.getElementById("demo").appendChild(img);
    }
}