function updateSecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time); 
}

setInterval(updateSecond, 1000);
