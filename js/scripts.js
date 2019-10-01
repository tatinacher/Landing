document.addEventListener("DOMContentLoaded", function(event) { 
    toggleAction('.navbar__help-button', '.help-dropdown');
    toggleAction('.navbar__login-button', '.login_modal_wrapper');
    toggleAction('.mobile-menu__close', '.mobile-menu');
    toggleAction('.mobile-menu-button', '.mobile-menu');
    toggleAction('.login-modal__close', '.login_modal_wrapper');

    var items = document.getElementsByClassName('list-element__header');
    console.log(items)
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", toggle);
      }
});
  
function toggle(e){
    if(e.target.parentNode){
        var toggleElement = e.target.closest('.main__list-element');
        console.log(toggleElement)
        toggleElement.classList.toggle('active');
    }
    
}
function toggleAction(buttonClass, toggleClass){
    var buttonElement = document.querySelector(buttonClass);
    buttonElement.addEventListener( "click", function(){
        var toggleElement = document.querySelector(toggleClass);
        toggleElement.classList.toggle('hidden');
    });
}