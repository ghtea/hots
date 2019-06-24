
 //call my menu !!!
   $(function(){
 $("#menu_div").load("https://ghtea.github.io/hots/jp/menu_jp.html");
    });
  

//make only one menu clickable
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('menu');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
  }

//
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }