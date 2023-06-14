let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

      document.querySelector('.js-result-calculation')
            .innerHTML = `Sum:${calculation}`;
      

      function updateCalculation (value) {
       
        if (value === 'Clear') {
          console.log(value);
          document.querySelector('.js-result-calculation')
            .innerHTML = `Sum: ${calculation}`;
          calculation = '';
          return;
        } else if (value === "=") {
          eval(calculation);
          let result = calculation;
          calculation=eval(calculation);
          console.log(calculation);
          document.querySelector('.js-result-calculation')
            .innerHTML = `Sum:${result} = ${calculation}`;
          calculation = '';
          return;
        }
        calculation += value;
        console.log(calculation);
        document.querySelector('.js-result-calculation')
            .innerHTML = `Sum:${calculation}`;
        localStorage.setItem('calculation', JSON.stringify(calculation));
      }