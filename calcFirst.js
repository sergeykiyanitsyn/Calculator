
let a = document.querySelector("input[name='a']").value;
let b = document.querySelector("input[name='b']").value;
let selector = document.getElementById('action'); 
let result = document.getElementById("result"); 

function getValue() {
  a = document.querySelector("input[name='a']").value;
  b = document.querySelector("input[name='b']").value;
}

function calc () {
  switch (selector.value) {
      
    case "add":

      result.innerHTML = Number(a) + Number(b);
      break;  

    case "multi":

      result.innerHTML = Number(a) * Number(b);
      break;

    case "subtract":

      result.innerHTML = Number(a) - Number(b);
      break; 

    case "divide":

      result.innerHTML = Number(a) / Number(b);
      break; 
    
    default:
      alert('Я сегодня отдыхаю');
      break;
  }
}

// Нажатие на кнопку равно
  equally.addEventListener("click", () => {
    getValue();
    calc ();
    results () 
  });

  function results () {
    document.querySelector("h2[name='results']").innerHTML = a + " " + selector.value + " " + b + " = " + result.innerHTML;
  }


