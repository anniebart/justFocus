const s = document.querySelector('.additional-min');
const time = document.querySelector('.time');
const circle = document.querySelector('.circle');
let input = document.querySelector('.minutes');
let count = 0


circle.style.webkitAnimationPlayState = "paused";

input.addEventListener('change', ()=>{
    circle.innerText= 'just breathe'
    count = input.value;
    circle.style.webkitAnimationPlayState = "running";
    time.innerText = count
    if (count == 1){
        s.style.opacity = '0'  
    }    

    if (count> 0) {
       
    const startTimer = setInterval(()=>{
            
            count --;
        
            time.innerText = count;
            s.style.opacity = '1'  

            if (count ===1){
                s.style.opacity = '0'  
            } 
             
             if(count ===0){
                s.style.opacity = '1'  
                time.innerText= 0
                circle.innerHTML="you're done!"
                circle.style.webkitAnimationPlayState = "paused";
                clearInterval(startTimer)      
            }
            
        }, 1000)
    }

});



window.addEventListener('mousemove', () =>{
    if (count > 1){
      count = input.value || 0
      console.log(count)
      time.innerText= count
    } else {
        time.innerText= '0';
        
    }
  }
);


