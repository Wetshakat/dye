let Button = document.getElementById('btn');
 let Container = document.getElementById('racy');
 let Input= document.getElementById('myToDo');

 Button.addEventListener('click', function () {

    let myToDo = document.createElement('p');
    myToDo.innerText=Input.value;
    Input.value = "";
    Container.appendChild(myToDo);
    myToDo.style.color = 'white'

    myToDo.addEventListener('dblclick',
      function () {
         myToDo.remove();
         
      }
   )
  
   
   myToDo.addEventListener('click', function () {
      
      if(myToDo.style.textDecoration === 'line-through'){
         myToDo.style.textDecoration ='none'
      } else {
         myToDo.style.textDecoration = 'line-through'
      }
   });

   
 })