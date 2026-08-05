function generateQR(){

let text = document.getElementById("text").value;


if(!text){
    alert("Enter text!");
    return;
}


document.getElementById("qr").innerHTML = `

<img 
src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}"
>

<br><br>

<a download="qr.png" href="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}">
Dowloand QR
</a>

`;

}