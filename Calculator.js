let input=document.querySelector("input")
let buttons=document.querySelectorAll(".button")
buttons.forEach((e)=> {
    e.addEventListener("click",()=>{
        

        const ButtonContent = e.textContent
       
        if (ButtonContent === '=') {
            
            try {
              input.value = eval(input.value);
            } catch (error) {
              input.value = 'Error';
            }
          }
          else if(ButtonContent === 'C'){
            input.value=""
          }
          else if(ButtonContent==='%'){
            input.value+='/100'
            
            // const numbers = input.value.split('%')
            // if(numbers.length===2){
            //   num1=numbers[0]
            //   num2=numbers[1]
            //   // console.log(num1,num2)
            //   if(!isNaN(num1) && !isNaN(num2)){
            //     if(num2 != 0){
            //       input.value = (num1/num2)*100
            //     }
            //     else{
            //       input.value = 'Error: Division by zero'
            //     }
                
            //   }
            //   else{
            //     input.value = 'Error'
            //   }
            // }
            
          }
        
          else if(ButtonContent=='x'){
            input.value += '*'
          }
        else{
            
            input.value += ButtonContent;
          }
        // console.log(ButtonContent)
        
    
    })
});