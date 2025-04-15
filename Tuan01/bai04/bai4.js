function calcTip(bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`Hóa đơn là ${bill}, tiền tip là ${tip.toFixed(2)}, tổng cộng ${(
        bill + tip
    ).toFixed(2)}`);
}

calcTip(275);
calcTip(40);
calcTip(430);