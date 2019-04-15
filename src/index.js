import _ from 'lodash';
import './styles/style.css'
import logo from './img/logo.png'

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'], ' ');
    element.classList.add('hello');

    var my_logo = new Image();
    my_logo.src = logo;
    
    element.appendChild(my_logo);

    return element;

    document.body.appendChild(component());
}