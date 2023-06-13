

  const watch = document.querySelector("#watch");
  let milliseconds = 0;
  let timer;

  let counter = 30000;



  const startWatch = () =>{
   
    watch.classList.remove('pause');
    clearInterval(timer);

   
    timer = setInterval(()=>{
 
      milliseconds += 10;
      let dateTimer = new Date(milliseconds);
      watch.innerHTML =
      
      ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMilliseconds()).slice(-2); 
     
  },10)
  

    
  };

  const pauseWatch = () => {
    watch.classList.add('paused');
    clearInterval(timer);
  };

  const resetWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    milliseconds = 0;
   
    watch.innerHTML = '00:00';
  };

  document.addEventListener('click',(e) =>{
    const element = e.target;
    if (element.id === 'start') startWatch();
    if (element.id === 'pause') pauseWatch();
    if (element.id === 'reset') resetWatch();
  });

