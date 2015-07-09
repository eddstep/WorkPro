/**
 * Created by Эдгар on 09.07.2015.
 */
/**
 * Created by Эдгар on 26.06.2015.
 */

function Menu(options){
    var cont = options.menuContainerElem;
    var menuItems = options.menuListObj;
    var menuForm = options.typeOfMenu;

    (function(){
        var menu = document.createElement('div');
        menu.appendChild(createMenuList(menuItems));
        menu.className = menuForm;

        cont.appendChild(menu);
    }());

    function createMenuList(obj){
        var ul = document.createElement('ul');

        for(var item in obj){
            ul.innerHTML += '<li><a href="' + obj.item + '">' + item + '</a>';
        }

        return ul;
    }
}