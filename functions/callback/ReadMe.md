
          function shopping(payment, payByCash, payByCard) {
            if (payment === "cash") {
              payByCash();
            } else if (payment === "card") {
              payByCard();
            }
          }

          let pay_cash = function () {          // callback function to run if payment is 'cash'
            console.log("paid by cash");
          };

          let pay_card = function () {          // callback function to run if payment is 'card'
            console.log("paid by card");
          };

          shopping("cash", pay_cash, pay_card);
          shopping("card", pay_cash, pay_card);


you can pass arrow function in place of callback


        function shopping(payment, payByCash, payByCard) {
          if (payment === "cash") {
            payByCash();
          } else if (payment === "card") {
            payByCard();
          }
        }


        shopping("cash", 
          () => { console.log("paid by cash") }, 
          () => { console.log("paid by card") }
        );
