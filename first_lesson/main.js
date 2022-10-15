const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'green_sock.jpg',
    inventory: (Math.floor(Math.random() * 101)),
    onSale: (Math.random() < 0.5),
  },
});
