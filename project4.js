function change() {
    var top = document.getElementById("top-bar");

    top.classList.toggle("active");

    var main = document.getElementById("main-bar");

    main.classList.toggle("active");

    var cont = document.getElementById("contents");

    cont.classList.toggle("active");

    var color = document.getElementById("color");


    color.classList.toggle("active");

}