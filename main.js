var mouseevent = "empty";
var last_x, last_y;
canvas = document.getElementById("Caaanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 3;
radius = 40;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("C_O_L_O_R").value;
    width = document.getElementById("W_I_D_T_H").value;
    radius = document.getElementById("R_A_D_I_U_S").value;
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseevent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseevent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        //console.log("Last positions of x & y coordinates :- ");
        //console.log("x :- " + last_x + "y :- " + last_y);
        //ctx.arc(last_x, last_y, 40, 0, 2 * Math.PI);
        console.log("Current positions of x & y coordinates :- ");
        console.log("x :- " + current_x + "y :- " + current_y);
        ctx.arc(current_x, current_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}

function c_l_e_a_r() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}