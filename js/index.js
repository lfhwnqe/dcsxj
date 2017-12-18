$(".nav").on("click", function (e) {
    console.log(e.target.id)
    switch (e.target.id) {
        case "introduceMain":
            console.log($("body .introduceMain"))
            $("body .introduceMain").addClass("active").siblings().removeClass("active")
            break
        case "buyMain":
            $("body .buyMain").addClass("active").siblings().removeClass("active")
            break
        case "concat":
            $("body .concat").addClass("active").siblings().removeClass("active")
    }
})