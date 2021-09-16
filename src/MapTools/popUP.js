
function useFullScreen(){
    openModal('#firstinfo_overlay','#first_info',false);
    document.documentElement.requestFullscreen();   }

   const first_info         = document.querySelector('#first_info');



   function randomQuote(index){ document.getElementById("display_pin_memo").innerHTML = 'Here'+10+index; }

   function ctrlMainFunc(func_Nanme) {
     var i;
     var x = document.getElementsByClassName("mainFunc");
     for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
     }
     document.getElementById(func_Nanme).style.display = "block";
   }

function openModal (m_overlay,c,value){ 
    const modal_overlay = document.querySelector(m_overlay);
            const modal         = document.querySelector(c);
            const modalCl = modal.classList
            const overlayCl = modal_overlay
    
            if(value){
            overlayCl.classList.remove('hidden')
            setTimeout(() => {
                modalCl.remove('opacity-0')
                modalCl.remove('-translate-y-full')
                modalCl.remove('scale-150')
            }, 100);
            } else {
            modalCl.add('-translate-y-full')
            setTimeout(() => {
                modalCl.add('opacity-0')
                modalCl.add('scale-150')
            }, 100);
            setTimeout(() => overlayCl.classList.add('hidden'), 300);
            }
        } 

// 記得 可以 再做調整。        
// openModal('#firstinfo_overlay','#first_info',true);