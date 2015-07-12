/**
 * Created by Эдгар on 09.07.2015.
 */

function Menu(options){
    var cont = options.menuContainerElem;
    var menuItems = options.menuListObj;
    var menuForm = options.typeOfMenu;

    return function(){
        var menu = document.createElement('div');

        menu.appendChild(createMenuList(menuItems));
        menu.className = menuForm;

        cont.appendChild(menu);
    };

    function createMenuList(obj){
        var ul = document.createElement('ul');
        var html = '';

        for(var item in obj){
            html += '<li><a href="' + obj.item + '">' + item + '</a></li>';
        }

        ul.innerHTML = html;

        return ul;
    }
}

function SliderMenu(options){
    Menu.apply(this.arguments);
}

SliderMenu.prototype = Object.create(Menu.prototype);
SliderMenu.prototype.constructor = SliderMenu;