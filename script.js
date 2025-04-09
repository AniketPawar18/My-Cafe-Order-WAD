let menu = {
    'Tea': 20, 'Coffee': 45, 'Cola': 50, 'Lemon Tea': 35,
    'Pizza': 120, 'Burger': 90, 'Fries': 55, 'Roll': 80,
    'Icecream': 190, 'Milkshake': 95
};

let order = [];

function addToOrder(item, price) {
    order.push({ name: item, price: price });
    updateOrder();
}

function updateOrder() {
    let orderList = document.getElementById("order-list");
    let totalPriceElement = document.getElementById("total-price");

    orderList.innerHTML = "";
    let total = 0;

    order.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        orderList.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: ₹${total}`;
}

function generateBill() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }

    let total = order.reduce((sum, item) => sum + item.price, 0);
    let gst = (total * 5) / 100;
    let finalAmount = total + gst;

    alert(`Total Bill:\nSubtotal: ₹${total}\nSGST: ₹${(gst / 2).toFixed(2)}\nCGST: ₹${(gst / 2).toFixed(2)}\nFinal Total: ₹${finalAmount.toFixed(2)}\n\nThank you for visiting! 😊`);
    order = [];
    updateOrder();
}
