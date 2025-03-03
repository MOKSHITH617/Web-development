function switchOff() {
    document.getElementById('bulbImage').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("offSwitch").style.backgroundColor = "red";
    document.getElementById("onSwitch").style.backgroundColor = "gray";
    document.getElementById("switchStatus").textContent = "SwitchOff";
}

function switchOn() {
    document.getElementById('bulbImage').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("onSwitch").style.backgroundColor = "green";
    document.getElementById("offSwitch").style.backgroundColor = "gray";
    document.getElementById("switchStatus").textContent = "SwitchON";
}