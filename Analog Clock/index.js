 const api_call = () => {
     const URL = "https://api.unsplash.com/photos/random?query=clock"
     fetch(URL, {
         headers: {
             'Authorization': 'Client-ID=qXewMvUsZnIujFeKdMsXI59w56QeJn4648T-C8FJDlu'
         }
     }).then(res => res.json())
     .then(res => console.log(res))
     .catch(error => console.log(error))
 }
 api_call()

 
 setInterval(() => {
     d= new Date();
     htime = d.getHours();
     mtime = d.getMinutes();
     stime = d.getSeconds();
     hrotation = 30*htime + mtime/2;
     mrotation = 6*mtime;
     srotation = 6*stime;

     hour.style.transform = `rotate(${hrotation}deg)`;
     minute.style.transform = `rotate(${mrotation}deg)`;
     second.style.transform = `rotate(${srotation}deg)`;
 }, 1000);