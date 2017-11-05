var vueSwipe = VueSwipe.Swipe;
var vueSwipeItem = VueSwipe.SwipeItem
var app = new Vue({
    el: ".body",
    data: {
        num: null
    },
    components: {
        'swipe': vueSwipe,
        'swipe-item': vueSwipeItem
    }
})