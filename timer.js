const s = document.querySelector('.additional-min');
const time = document.querySelector('.time');
const circle = document.querySelector('.circle');
let input = document.querySelector('.minutes');
let count = 0

circle.style.webkitAnimationPlayState = "paused";

input.addEventListener('change', ()=>{
    count = input.value;
    circle.style.webkitAnimationPlayState = "running";
    time.innerText = count
    if (count == 1){
        s.style.opacity = '0'  
        console.log(count)
    }
    console.log(count)
    
        setInterval(()=>{
           if (count> 0) {count --;
            console.log(count);
            time.innerText = count;
            s.style.opacity = '1'  
            if (count ===1){
                s.style.opacity = '0'  
            } 
        }
             
            else if(count ===0){
                s.style.opacity = '1'  
                circle.innerHTML="you're done!"
                
            }
            
        }, 60000)
    

});



window.addEventListener('mousemove', () =>{

      count = input.value || 0
      console.log(count)
      time.innerText= count
     
  }
);


