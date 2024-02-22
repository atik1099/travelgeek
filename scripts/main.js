const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seatNo = event.target.innerText;

        const selected = document.getElementById("selected");

        // disable
        
        event.target.setAttribute("disabled", false);



        // warning
        const limitation = getConvertedValue("selected-counter");
        if (limitation + 1 > 4) {
            alert("You can't select more seats due to policy");
            return;
        }
        
        // coloring
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";



        // selected seat no
        const selectedCounter = getConvertedValue("selected-counter");
        document.getElementById("selected-counter").innerText = selectedCounter + 1;

        // seat left
        const seatLeft = getConvertedValue("seat-left");
        document.getElementById("seat-left").innerText = seatLeft - 1;



        const div = document.createElement("div");
        div.classList.add("flex", "justify-between");

        const seat = document.createElement("p");
        const seatClass = document.createElement("p");
        const price = document.createElement("p");

        seat.innerText = seatNo;
        seatClass.innerText = "Economic";
        price.innerText = 550;

        div.appendChild(seat);
        div.appendChild(seatClass);
        div.appendChild(price);

        selected.appendChild(div);

        updateTotalCost(price);
        updateGrandTotal();

    })
}


function updateTotalCost(value) {
    const totalPrice = getConvertedValue("total");
    const convertPrice = parseInt(value.innerText);
    const sum = totalPrice + convertPrice;
    document.getElementById("total").innerText = sum;
}

function updateGrandTotal(status) {
    const totalPrice = getConvertedValue("total");
    if (status == undefined) {

        document.getElementById("grandtotal").innerText = totalPrice;
    }
    else {
        const couponCode = document.getElementById("coupon").value;

        if (couponCode == "couple20") {
            const discount = totalPrice * 0.2;
            document.getElementById("grandtotal").innerText = totalPrice - discount;

        }
        else if (couponCode == "new15") {
            const discount = totalPrice * 0.15;
            document.getElementById("grandtotal").innerText = totalPrice - discount;
        }
        else {
            alert("Please Enter Valid Coupon")
        }
    }

}

function getConvertedValue(id) {
    const priceElement = document.getElementById(id).innerText;
    const convertPrice = parseInt(priceElement);
    return convertPrice;
}
