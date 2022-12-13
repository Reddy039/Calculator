const btns = document.querySelectorAll("button");
const displayEle = document.querySelector(".display");

let expression = "";
btns.forEach((button) => {
    button.addEventListener("click",function(){
        if(button.textContent === "=")
            displayEle.textContent = eval(expression);
        else if(expression += button.textContent){
            displayEle.textContent = expression;
        }
        
    });
});