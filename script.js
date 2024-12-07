const p1 = document.querySelector('#p1b');
const p2 = document.querySelector('#p2b'); // Fixed typo in "document"
const res= document.querySelector('#res');
let x=0;
let y=0;
const winning=document.getElementById("dr");
let gameover=false;
function update(){
    document.querySelector('#p1score').textContent=x;
    document.querySelector('#p2score').textContent=y;
}
function check(){
    const win=parseInt(winning.value,10);
    if(win === x || win === y )
    {
        gameover=true;
        if(x!=y){
        x>y?alert("game over! player 1 wins"):alert("game over! player 2 wins");
        }
        else{
            alert("its a draw");
        }
    }
}

p1.addEventListener('click', function () { 
    if(!gameover){
    x+=1;
    check();
    update();
    }
});
p2.addEventListener('click', function () { 
    if(!gameover){
    y+=1;
    check();
    update();
    }
});
res.addEventListener('click', function () {
    x=0;
    y=0;
    gameover=false;
    update();
})