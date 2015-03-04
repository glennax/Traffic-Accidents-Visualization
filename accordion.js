var categories = document.querySelectorAll('.category'), i;
var submenus= document.querySelectorAll('.submenu'), i;
var isVisible = [];

function createListener(i) {
    return function (evt){

            if(isVisible[i]){
                submenus[i].classList.add('hidden');
                isVisible[i] = false;

            }else{
                submenus[i].classList.remove('hidden');
                isVisible[i] = true;
            }

    };    
}

for(var i = 0; i<categories.length; i++){
    isVisible[i] = false;
    categories[i].addEventListener('click', createListener(i));
};
