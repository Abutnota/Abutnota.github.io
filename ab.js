 var p=0;
function myFunction() {
 switch(p){
 default:
 document.body.style.backgroundImage ="url('BGr/sunset.gif')";
  p=1;
  break;
  case 1:
 document.body.style.backgroundImage ="url('BGr/fireplace.gif')" ;
 p=2;
 break;
  case 2:
  document.body.style.backgroundImage ="url('BGr/abc.gif')" ;
  p=0;
  break;
 }
}
