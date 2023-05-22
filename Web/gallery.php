<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>

    body{
        display:block;
        width:100vw;
        height:100vh;
    }
    .container{
        padding: auto;background-color:rgba(0,0,0,0.4);
        width: 94%;top:3%;left:3%;
        height: 94%;
        border: 2px solid black;
        display:inline-block;
        position:relative;
        border-radius:5%;
        
    }
    .tab{
        left:25%;
        top:20%;
        border: 2px solid black;
        width: 50%;transition:2s;
        height:60%;position:absolute;
        box-shadow:0 0 5px 4px black;
        border-radius:5%;
        background-size:cover;
        background-repeat:no-repeat; 
}
#t0{
    background-image:url("/pictures/hotel.jpg");

}
#t1{
    background-image:url("/pictures/nature4.jpg");

}
#t2{
    background-image:url("/pictures/nature3.jpg"); 
}

  .details{
    background-color:rgba(0,0,0,0.4);
    width:100%;color:white;
    position:absolute;
    text-align:center;
    height:10%;top:85%;
    line-height:100%;


    
  }


</style>
<body>
    <div class="container">
        <div class="tab" id="t0"><div class="details">Lorem 0ipsum dolor sit amet consectetur adipisicing elit. Quos esse...</div></div>
        <div class="tab" id="t1"><div class="details">Lorem 1ipsum dolor sit amet consectetur adipisicing elit. Quos esse...</div></div>
        <div class="tab" id="t2"><div class="details">Lorem 2ipsum dolor sit amet consectetur adipisicing elit. Quos esse...</div></div>



    </div>
</body>
<script>
var counter=0;
setInterval(change, 5000);
function change(){ 
    counter=counter+1;
    alter();
}

function alter(){
    var vasu = 't'+counter%3;
    //alert(vasu);
    var vasu1 = 't'+(counter+1)%3;
    var vasu2 = 't'+(counter+2)%3;
    console.log(vasu);console.log(vasu1);console.log(vasu2);
    document.getElementById(vasu).style="left:0%;width:100%;height:100%;top:0%;z-index:104;opacity:1;";
     setTimeout(jump,1);
   

}
function jump(){
    var vasu = 't'+counter%3;
    //alert(vasu);
    var vasu1 = 't'+(counter+1)%3;
    var vasu2 = 't'+(counter+2)%3;
    document.getElementById(vasu1).style="left:35%;top:20%;width:50%;height:60%;z-index:103;opacity:0.8;";
    document.getElementById(vasu2).style="left:0%;top:20%;width50%;height:60%;z-index:102;opacity:0.4;";
   
}
if(counter>100){counter=0;}

</script>
</html>