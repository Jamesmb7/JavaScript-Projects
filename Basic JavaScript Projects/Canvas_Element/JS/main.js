function draw_Circle()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(250,200,200,0,2 * Math.PI);
    ctx.stroke();
    ctx.moveTo(76,100);
    ctx.lineTo(410,320);
    ctx.stroke();
}

function color_Me()
{
    var c = document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var my_gradient = ctx.createLinearGradient(0,0,500,0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(0.5, "red")
    my_gradient.addColorStop(1, "white");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(0,0,500,500);
}