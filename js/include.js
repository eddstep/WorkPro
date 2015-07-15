/**
 * Created by Эдгар on 09.07.2015.
 */

function Menu(options){

    var cont = options.menuContainerElem;
    var menuItems = options.menuListObj;
    var menuForm = options.typeOfMenu;

    var menuBuilder = function(items, form){
        var menu = document.createElement('div');

        menu.appendChild(createMenuList(items));
        menu.className = form;

        return menu;
    }(menuItems, menuForm);

    function createMenuList(obj){
        var ul = document.createElement('ul');
        var html = '';

        for(var item in obj){
            html += '<li><a href="' + obj.item + '">' + item + '</a></li>';
        }

        ul.innerHTML = html;

        return ul;
    }

    this.cont = cont;
    this.menuBuilder = menuBuilder;

    this.appendToDoc(cont, menuBuilder);// final appending menu in doc after all fiches
}

Menu.prototype.appendToDoc = function(container, menu){
    container.appendChild(menu);
};

function SliderMenu(options){

    Menu.apply(this, arguments);

    this.allowed = true;
    this.appendToDoc(this.cont, this.menuBuilder);
}

SliderMenu.prototype = Object.create(Menu.prototype);
SliderMenu.prototype.constructor = SliderMenu;

SliderMenu.prototype.appendToDoc = function(){
    if(this.allowed){
        Menu.prototype.appendToDoc.apply(this, arguments);
    }
};