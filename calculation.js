let calculation = localStorage.getItem('calculation') || '' ;
      displayCalculation();
      function updateCalculation (num) {
        calculation += num ;
        displayCalculation();
        localStorage.setItem('calculation',calculation);
      }
      function displayCalculation() {
        document.querySelector('.onThePage')
          .innerHTML = calculation;
      }