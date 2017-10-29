var left = document.getElementsByTagName('button')[0];
var right = document.getElementsByTagName('button')[1];
var item = document.getElementsByClassName('item');

var number = document.getElementsByClassName('number')[0];

var mRight = 0;
right.onclick = function(event){
  console.log(event);
for(i = 0; i < 2 ; i++){
  item[i].style.opacity = 0.4;
item[i].style.backgroundColor = '#F9F3F3';
}
setTimeout(function(){
 for(i = 0; i < item.length ; i++){
  item[i].style.opacity = 1;

    }
  },200);

number.innerHTML = 'two';

 if (item[0].style.width == mRight + '%'){
item[1].style.width = mRight + '%';
number.innerHTML = 'three';
}


item[0].style.width = mRight + '%';





};
left.onclick = function(event){

  for(i = 2; i > 0 ; i--){
  item[i].style.opacity = 0.4;

}
setTimeout(function(){
 for(i = 2; i > 0 ; i--){
  item[i].style.opacity = 1;

    }
  },200);
  number.innerHTML = 'two';

if(item[1].style.width == 100 + '%'){
  item[0].style.width = 100 + '%';
   number.innerHTML = 'one';

}


if(item[2]){
  item[1].style.width = 100 + '%';

}





  };
