// document.getElementById('seat-C1').addEventListener('click',function () {
//     const productName = cardId('seat-C1');

// })

// function cardId(id) {
//     const cardIdValue = document.getElementById(id);
//     const productName = cardIdValue.childNodes[3].childNodes[3].innerText;
//     const productPrice = cardIdValue.childNodes[3].childNodes[5].innerText;

//     const list = productList(productName, productPrice)
//     console.log(productName, productPrice)
//     //return productName,productPrice;
// }
















// const price = document.getElementById('seats').innerText
// const convertPrice = parseInt(price);


// const cartCount = document.getElementById('cart').innerText
// const convertCartCount = parseInt(cartCount);


// const leftCount = document.getElementById('left').innerText
// const convertLeftCount = parseInt(leftCount);

// const allBtn = document.getElementsByClassName("add-btn");

// for(const btn of allBtn){
//     btn.addEventListener("click", function (event){
//         const name = event.target.parentNode.childNodes[1].innerText;
//         const price = event.target.parentNode.childNodes[1].childNodes[1].innerText;
//         console.log(name,price);

//         const selectedContainer = document.getElementById("selected-player-container");

//         const div = document.createElement("div");
//         div.classList.add("flex")//making it flex by tailwind
//         div.classList.add("justify-between")//if it wants more class
        
        
//         const p1= document.createElement("p");
//         const p2= document.createElement("p");
//         const p3= document.createElement("p");

//         p1.innerText = name;
//         p2.innerText = price;
//         p3.innerText = category;

//         div.appendChild(p1);
//         div.appendChild(p2);
//         div.appendChild(p3);
//         selectedContainer.appendChild(div);

//         updateTotalCost(price);
//         updateGrandTotal();


//     });
// }

// function getConvertedValue(id) {
//     const price = document.getElementById(id).innerText;
//     const convertPrice = parseInt(price);
//     return convertPrice;
// }

// // getting total
// function updateTotalCost(value){
//     const totalCost = getConvertedValue("total-cost");
//     const sum = totalCost+parseInt(value);
//     document.getElementById("total-cost").innerText = sum;
// }

// // grand total
// function updateGrandTotal(status){
//     // coupon (must use onclick)
//     const totalCost=getConvertedValue("total-cost");
//     if (status == undefined){

//     document.getElementById("grand-total").innerText = totalCost;
//     }
//     else{
//         const couponCode = document.getElementById("coupon-code").value;
//         if (couponCode == "love20"){
//             const discount = totalCost * 0.2;
//             document.getElementById("grand-total").innerText = totalCost - discount;
//         }
//         else{
//             alert("please enter valid coupon")
//         }
//     }


    
// }


// const result = getConvertedValue("cart");
// console.log("result");


// getConvertedValue("budget")