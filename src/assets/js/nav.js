
// document.querySelector('.btn').click(function () {
//     document.querySelector(this).classList.toggle("click");
//     document.querySelector('.sidebar').classList.toggle("show");
// }); 

document.querySelector('.feat-btn').click(function () {
    document.querySelector('nav ul .feat-show').classList.toggle("show");
    document.querySelector('nav ul .first').classList.toggle("rotate");
});
document.querySelector('.serv-btn').click(function () {
    document.querySelector('nav ul .serv-show').classList.toggle("show1");
    document.querySelector('nav ul .second').classList.toggle("rotate");
});
document.querySelector('nav ul li').click(function () {
    document.querySelector(this).classList.add("active").siblings().classList.remove("active");
});
