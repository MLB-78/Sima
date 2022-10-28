paypal.Buttons({
    
    createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency: 'EUR',
          value: '100500.99'
        }
      }]
    });

},

onApprove(data, actions) {
    fetch(`/capture/${data.orderID}`, {
      method: "post",
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error(err));
}

}).render('#poya');

