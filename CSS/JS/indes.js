const listbuy = document.getElementById("listbuy");
const buttonbuy = document.querySelector(".button-buy");
const buttonclose = document.querySelector(".button-close");
const contentlist = document.querySelector(".content-list");
const totalbuy = document.querySelector(".total-buy");
const iconmenu = document.querySelector(".icon-menu");
const iconcloseleft = document.querySelector("#img-icon_close--left");

let totalPago = 0;

buttonbuy.addEventListener("click", function(){
    $("#list-buy").addClass("box-buy");  
    $("#img-icon_close").css({"display":"block"});
    $("#content-list_compras").css({"display":"block"});
    $("#desglo-head").addClass("header-icons_desglo");
    $("#desglo-head").removeClass("header-icons");
})

buttonclose.addEventListener("click", function(){
    $("#list-buy").removeClass("box-buy");
    $("#img-icon_close").css({"display":"none"});
    $("#content-list_compras").css({"display":"none"});
})

iconmenu.addEventListener("click", function(){
    $("#desglo-head").removeClass("header-icons_desglo");
    $("#desglo-head").addClass("header-icons");
})

iconcloseleft.addEventListener("click", function(){
    $("#desglo-head").addClass("header-icons_desglo");
    $("#desglo-head").removeClass("header-icons");
})

$('.list-hombres').click(function(){

    $(".card-items_5").hide();
    $(".card-items_6").hide();
    $(".card-items_7").hide();
    $(".card-items_8").hide();

    $(".card-items_1").show();
    $(".card-items_2").show();
    $(".card-items_3").show();
    $(".card-items_4").show();

})

$('.list-mujeres').click(function(){

    $(".card-items_5").show();
    $(".card-items_6").show();
    $(".card-items_7").show();
    $(".card-items_8").show();

    $(".card-items_1").hide();
    $(".card-items_2").hide();
    $(".card-items_3").hide();
    $(".card-items_4").hide();
})



function agregarCompras(monto, name){
    totalPago +=monto;
    const list = document.createElement('p');
    list.textContent = `${name} - ${monto}`;
    contentlist.appendChild(list)
    totalbuy.textContent = `TOTAL A PAGAR - ${totalPago}`;
}

