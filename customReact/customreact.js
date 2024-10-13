function customRender(reacElement,mainContainer){
    /*
    const domElement =  document.createElement(reactElement.type);
    domElement.innerHTML = reacElement.children;
    domElement.setAttribute('href',reacElement.props.href);
    domElement.setAttribute('target',reacElement.props.target);
    mainContainer.appendChild(domElement); 
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reacElement.children
    for(const prop in reactElement.props){
        if(prop === 'children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])

    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to open google'
} 
const mainContainer = document.querySelector('#root');
customRender(reactElement,mainContainer)
