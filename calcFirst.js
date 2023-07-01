
let a = document.querySelector("input[name='a']").value;
let b = document.querySelector("input[name='b']").value;
let selector = document.getElementById('action'); 
let result = document.getElementById("result"); 
let outField = document.querySelector("h2[name='results']");
let clon = document.getElementById("showResultsText");



// Нажатие на кнопку равно
equally.addEventListener("click", () => {
  getValue();
  calc ();
  results(); 

  let history = document.getElementsByClassName("showResultsText");
  for (i = 0; i < history.length; i++){
    if (i!=0) {
    history[i].addEventListener("dblclick", listItemHandler);
    }
  }
});




//Инцилизация введенных значений
function getValue() {
  a = document.querySelector("input[name='a']").value;
  b = document.querySelector("input[name='b']").value;
}

//Расчет
function calc () {
  switch (selector.value) {
      
    case "add":
      action = " + ";
      result.innerHTML = Number(a) + Number(b);
      
      break;  

    case "multi":
      action = " * ";
      result.innerHTML = Number(a) * Number(b);
      
      break;

    case "subtract":
      action = " - ";
      result.innerHTML = Number(a) - Number(b);   
      break; 

    case "divide":
      action = " / ";
      result.innerHTML = Number(a) / Number(b);
      
      break; 
    
    default:
      alert('Я сегодня отдыхаю');
      break;
  }
}


 function results () {
    showResults()
    saveResults()
  }


//Функция вывода рез-ов
  function showResults() {
    outField.innerHTML = a + " " + action + " " + b + " = " + result.innerHTML;
  }


// Функция сохранения результатов 
  function saveResults () {
    let clonedElement = clon.cloneNode(true);
    document.body.appendChild(clonedElement);
  }
  
//Функция слушатель
  function listItemHandler(event) {
    //alert('Вы выбрали элемент: ' + event.target.innerText);
    delite (event.target)
  }

  //Функция удаления результатов
  function delite (element) {
    element.parentNode.remove();
  }
