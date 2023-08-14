$(function () {
  // 增減數量
  $(".qtyplus").click(function () {
    let inputAdd = $(this).siblings(".qty");
  //   console.log("inputAdd", inputAdd.val());
    let currentValue = parseInt(inputAdd.val());
    // console.log("sum", $(this).siblings(".sum"));
    let sumElement = $(this).closest(".form-group").find(".sum");
    let priceElement = $(this).closest(".form-group").find(".u-p");
    // console.log("price", priceElement.text());
    let price = priceElement.text();
    let originPrice = parseInt(sumElement.text());
    originPrice = 0;
  //   console.log("originPrice", originPrice);
    //點擊增加1
    inputAdd.val(currentValue + 1);
    //更新金額
    let realPrice =(currentValue + 1) * price + originPrice;
    sumElement.text("$"+realPrice);
    updateTotal();
  });

   //減少數量
  $(".qtyminus").click(function () {
    let inputRemove = $(this).siblings(".qty");
    let lowValue = parseInt(inputRemove.val());

    //點擊減少1
    inputRemove.val(lowValue - 1);

    //如果數量為零就刪除
    if (lowValue - 1 === 0) {
      let pic = $(this).closest(".form-group").prev("hr");
      pic.remove();
      $(this).closest(".form-group").remove();
    } else {
      //不為零就更新金額
      let finalPrice = (lowValue - 1) * price + originPrice;
      sumElement.text("$"+finalPrice);
    }
    updateTotal();
  });

  //點垃圾桶刪除
  $(".fa-trash-can").click(function () {
    $(this).closest(".form-group").prev("hr").remove();
    $(this).closest(".form-group").remove();

    updateTotal();
  });

  //總金額更新
  function updateTotal() {
    let total = 0;
    $(".sum").each(function () {
      let price = parseInt($(this).text());
      total += price;
    });
    $(".amount span").text("$"+total);
  }
});

console.log("sum", $(this).siblings(".sum").text);
