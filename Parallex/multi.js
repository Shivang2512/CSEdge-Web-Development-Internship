let g = document.getElementById('g');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let e = document.getElementById('e');


window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    
    g.style.left = value * 1.5 + 'px';
    a.style.top = value * -1.5 + 'px';
    b.style.top = value * -1.5 + 'px';
    c.style.left = value * 1.5 + 'px';
    d.style.left = value * -1.5 + 'px';
    e.style.left = value * -1.5 + 'px';

});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

