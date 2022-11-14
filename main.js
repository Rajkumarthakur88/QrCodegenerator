// QR CODE GENERATOR USING FETCH API
let form = document.querySelector("form");
let input = document.querySelector("input");
let image = document.querySelector("img");

form.addEventListener("submit", genQr);

async function genQr(e) {
    e.preventDefault();
    let inputValue = input.value;
    let data = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputValue}`);
    let Qrsrc = data.url;
    image.setAttribute("src", Qrsrc);
    form.reset();
}