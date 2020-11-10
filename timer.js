const s = document.querySelector('.additional-min');
const time = document.querySelector('.time');
const circle = document.querySelector('.circle')
let count = 0




window.addEventListener('load', focus());
window.addEventListener('mousemove', ()=>{
    resetFocus()
    time.innerText = '0';
})

  function focus(){

    
    setInterval(()=>{
        count++
        console.log(count)
        time.innerText = count;
        if (count ===1){
            s.style.opacity = '0'
        } else {
            s.style.opacity = '1'
        }
    }, 60000)
   

     
  }

  function resetFocus(){
      console.log('reset focus!')
      count = 0
}


function updateTime(){
    
    time.innerText = count;
  
    console.log(count)
}