
function dataload(){
    document.getElementById('res1').style.display ='block';
    document.getElementById('res2').style.display ='block';
    document.getElementById('res3').style.display ='block';
    document.getElementById('res4').style.display ='block';
    document.getElementById('res5').style.display ='block'; 
}


function filterall(x){
    if(x==0){
        document.getElementById('res1').style.display ='block';
        document.getElementById('res2').style.display ='block';
        document.getElementById('res3').style.display ='block';
        document.getElementById('res4').style.display ='block';
        document.getElementById('res5').style.display ='block';
    }
    if(x==1){
        document.getElementById('res1').style.display = 'none';
        document.getElementById('res2').style.display = 'none';
        document.getElementById('res3').style.display = 'block';
        document.getElementById('res4').style.display = 'none';
        document.getElementById('res5').style.display = 'none';
    }
    if(x==2){
        document.getElementById('res1').style.display = 'block';
        document.getElementById('res2').style.display = 'none';
        document.getElementById('res3').style.display = 'block';
        document.getElementById('res4').style.display = 'block';
        document.getElementById('res5').style.display = 'none';
    }
    if(x==3){
        document.getElementById('res1').style.display = 'none';
        document.getElementById('res2').style.display = 'block';
        document.getElementById('res3').style.display = 'none';
        document.getElementById('res4').style.display = 'none';
        document.getElementById('res5').style.display = 'none';
    }
    if(x==4){
        document.getElementById('res1').style.display = 'block';
        document.getElementById('res2').style.display = 'none';
        document.getElementById('res3').style.display = 'none';
        document.getElementById('res4').style.display = 'block';
        document.getElementById('res5').style.display = 'block';
    }
    if(x==5){
        document.getElementById('res1').style.display = 'none';
        document.getElementById('res2').style.display = 'block';
        document.getElementById('res3').style.display = 'none';
        document.getElementById('res4').style.display = 'none';
        document.getElementById('res5').style.display = 'block';
    }
    if(x==6){
        document.getElementById('res1').style.display = 'block';
        document.getElementById('res2').style.display = 'none';
        document.getElementById('res3').style.display = 'block';
        document.getElementById('res4').style.display = 'block';
        document.getElementById('res5').style.display = 'none';
    }
   
}
