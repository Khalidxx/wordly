// JavaScript Document

//dropdown menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}


// Close the dropdown if the user clicks outside of it
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
  
	
	//to change arrow onclick
  $('button').click(function() {
	

    $('.arrow').change(function() {
        var nav = $(this);
       if(nav.hasClass('old'))
    {
      nav.removeClass('old');
            nav.addClass('new');
    }
  else {
            nav.removeClass('new');
            nav.addClass('old');
        }
    }).change();

});
  
  
}
