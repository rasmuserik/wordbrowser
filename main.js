canvas = document.getElementById("canvas");
var w = canvas.width = window.innerWidth
var h = canvas.height = window.innerHeight
ctx = canvas.getContext("2d");
console.log(canvas);
$.ajax({url:"words.txt", async:"false", success: function(text) {
    words = text;
}});
ctx.fillRect(100,100,1000,1000);
