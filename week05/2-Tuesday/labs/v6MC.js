
class Button {

    constructor(domElement, bgColor, text){

        this.domElement = domElement;
        this.bgColor = bgColor;
        this.text = text;

        //Taking all the above informationa and putting it in a container.
        this.state = {

            domElement: domElement,
            bgColor: bgColor,
            text: text,
            count: 0
        }
    }

    createButton = () => {

        let button = document.createElement('button');

        button.textContent = this.state.text;

        button.style.backgroundColor = this.state.bgColor;

        button.addEventListener('click', ()=>{

            this.state.count += 1;
            button.textContent = `${this.state.text} ${this.state.count}`
        })

        this.state.domElement.appendChild(button);
    }
//have to call the method in the function
    render(){

        this.createButton
    }
}