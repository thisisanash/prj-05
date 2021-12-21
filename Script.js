let menu = document.querySelector(".menu");

let btnGroup = menu.querySelectorAll(".btn");
let itemHolder = menu.querySelector(".item-group")
let itemGroup = menu.querySelectorAll(".item");

itemGroup.forEach(function(item){
    item.classList.add("active")
})

btnGroup.forEach(function (btn) {
    btn
    btn.addEventListener("click", function () {
        btnGroup.forEach(function (btns) {
            btns.classList.remove("active");
        })
        btn.classList.toggle("active");

        if (btn.textContent === "all") {
            itemGroup.forEach(function (item) {
                item.classList.add("active")
            })
        }
        if(btn.textContent != "all"){
            itemGroup.forEach(function(item){
                if(item.classList.contains(btn.textContent)){
                    item.classList.add("active");
                }
                else{
                    item.classList.remove("active");
                }
            })
        }
    })
})