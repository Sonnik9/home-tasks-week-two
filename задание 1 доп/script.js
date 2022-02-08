
    let bodyss = document.body;
    let Minut = document.querySelector('.minut');
    let Second = document.querySelector('.second');
    let StartTime = document.querySelector('.btn-for-chenge'); 
    let reset = document.querySelector('.reset');
    let stopp = document.querySelector('.stop');
    document.body.style = `background: url('./имж/зима.jpg')`;

    function offFunc(){
       
       on.style.display = 'inline';
       off.style.display = 'none';


   }

   function onFunc(){

       off.style.display = 'inline';
       on.style.display = 'none';

   }


   


    StartTime.addEventListener('click', Start);
    reset.addEventListener('click', Resett);
    stopp.addEventListener('click', Stopp);
    let m = 0;
    let s = 0;
    Second.innerHTML = "0" + s;
    Minut.innerHTML = "0" + m;
    
 
    let k=0;
    let timerId;
  
    
  function Start() {
   
        stopp.style.display = 'inline';

        StartTime.style.display = 'none';
       
        if(s<10){

         Second.innerHTML = "0" + s;
                }

           
       if(s>9) {
       Second.innerHTML = s;
   
       
       }
       s = s+1;
       timerId = setTimeout(Start, 1000);  
       if(s%4==0){
           k++;


           if(k==1)
           {  document.body.style = `background: url('./имж/весна.jpg');
           -moz-transition: all 300ms;
           -webkit-transition: all 300ms;
            transition: all 900ms;`;
        
        
        }
           if(k==2)
           {  document.body.style = `background: url('./имж/лето2.jpg') no-repeat;
           background-size: 100%;
           -moz-transition: all 300ms;
           -webkit-transition: all 300ms;
           transition: all 900ms;`;
        
        
        }

           if(k==3)
           {   document.body.style = `background: url('./имж/осень2.jpg') no-repeat;
           background-size: 100%;
           -moz-transition: all 300ms;
           -webkit-transition: all 300ms;
           transition: all 900ms;`;
        
        
        }

           if(k==4)
           {   document.body.style = `background: url('./имж/зима.jpg') no-repeat;
           background-size: 100%;
           -moz-transition: all 300ms;
           -webkit-transition: all 300ms;
           transition: all 900ms;`;
        
        
        }

    

        if(k==4){k=0;}


                   }
           
  

      
         if(s>59) {

         return m = m+1, s=0;
         Second.innerHTML = "0" + s;
      
         }

         if(m<10) {

            Minut.innerHTML = "0" + m;
         }

         if (m>9) {

            Minut.innerHTML = m;
         }
       
        
         if(m==11)
      
            {clearTimeout(timerId)}


        
    
    
             }

           
             



                function Resett() {

                    stopp.style.display = 'none';

                    StartTime.style.display = 'inline';
                    document.body.style = `background: url('./имж/зима.jpg')`;
                    k=0;
                    s=0;
                    m=0;
                    Second.innerHTML = "0" + s;
                    Minut.innerHTML = "0" + m;
                    clearTimeout(timerId);

                }


                function Stopp() {


                    stopp.style.display = 'none';

                    StartTime.style.display = 'inline';
                    clearTimeout(timerId);

                }

  