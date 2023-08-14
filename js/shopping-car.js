$(function () {
    // 增減餐點
    $('.qtyplus').click(function () {
        let inputAdd = $(this).siblings('.qty');
        let currentValue = parseInt(inputAdd.val());
        let originPrice = parseInt($(this).siblings('.u-p').text());
        //點擊增加1
        inputAdd.val(currentValue + 1)
        //更新金額
        let realPrice = (currentValue + 1) * originPrice;
        $(this).siblings('.sum').text(realPrice);

        updateTotal();
    })

    $('.qtyminus').click(function () {
        let inputRemove = $(this).siblings('.qty');
        let lowValue = parseInt(inputRemove.val());
        let lessPrice = parseInt($(this).siblings('.u-p').text());
        let finalPrice;
        //點擊減少1
        inputRemove.val(lowValue - 1);

        //如果數量為零就刪除餐點
        if (lowValue - 1 === 0) {
            let pic = $(this).closest('.form-group').prev('hr')
            pic.remove()
            $(this).closest('.form-group').remove()
        } else {
            //不為零就更新金額
            finalPrice = (lowValue - 1) * lessPrice;
            $(this).siblings('.sum').text(finalPrice);
        }
        updateTotal();
    })

    //點垃圾桶刪除餐點
    $('.fa-trash-can').click(function () {
        $(this).closest('.form-group').prev('hr').remove();
        $(this).closest('.form-group').remove();

        updateTotal();
    })

    //總金額更新
    function updateTotal() {
        let total = 0;
        $('.sum').each(function () {
            let price = parseInt($(this).text());
            total += price;
        })
        $('.amount span').text(total);
    }

})