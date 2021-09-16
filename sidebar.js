$(".hamburger").click(function () {
    $(".wrapper").toggleClass("collapse");
    $(".hamburger").toggleClass("open");
});
$(".sidebar").hover(function () {
    let hamburger = document.getElementById("hamburger");
    if(hamburger.className.includes("open")){
        
    }else{
        $(".wrapper").toggleClass("collapse");
    }
});