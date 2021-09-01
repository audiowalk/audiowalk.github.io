// const vm = new Vue({
//     el: '#app',
//     // Mock data for the value of BTC in USD
//     data: { BTCinUSD: 3759.91, BTCinEURO:3166.21 }
//   });

 
//  const vm = new Vue({
//         el: '#app',
//         data: {
//           results: {"BTC": {"USD":3759.91,"EUR":3166.21},
//                     "ETH": {"USD":281.7,"EUR":236.25},
//                     "NEW Currency":{"USD":5.60,"EUR":4.70}},
//         }
//       });


 
      const url =
            "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";
       
      const vm = new Vue({
              el: '#app',
              data: {
                results: []
              },
              mounted() {
                axios.get(url).then(response => {
                  this.results = response.data
                })
              }
            });


            const vmx = new Vue({
                el: '#app22',
                data: {
                  results: []
                },
                mounted() {
                  axios.get(url).then(response => {
                    this.results = response.data
                  })
                }
              });