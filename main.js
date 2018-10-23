function getData() {
    var data = []
    for (i = 0; i < 3; i++) {
        var rand = Math.floor(Math.random() * 100)
        var dateObj = {
            src: 'https://picsum.photos/200/200/?image=' + rand,
            product: '产品' + Math.floor(Math.random() * 100),
            price: '$' + Math.floor(Math.random() * 100)
        }
        data.push(dateObj)
    }
    return data
}
$('.add').on('click', function () {
    var data = getData()
    for (i = 0; i < 3; i++)
        $('.item-wrap').append(`
            <div class="item">
                <div class="mask">
                <button class="del">删除</button>
                </div>
                <img src=${data[i].src} alt="">
                <div class="info">
                    <p>${data[i].product}</p>
                    <p>${data[i].price}</p>
                </div>
            </div>
        `)
})

$('.edit').on('click', function () {
    if ($('.mask').css('display') === 'none') {
        $('.mask').css('display', 'block')
    } else{
        $('.mask').css('display', 'none')
    }
})

$('.item-wrap').on('click', '.del', function(){
    $(this).parents('.item').remove()
})