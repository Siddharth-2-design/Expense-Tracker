const total = document.querySelector(".total");
const earning = document.querySelector(".earning");
const expense = document.querySelector(".expense");
const tittle = document.querySelector(".tittle");
const amount = document.querySelector(".amount");
const category = document.querySelector(".category");
const type = document.querySelector(".type");
const date = document.querySelector(".date");
const btn = document.querySelector(".btn");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");


btn.addEventListener("click" , () => {

    
    if(type.value == "earning"){
        const task = document.createElement("div");
        task.classList.add("box");
        box1.appendChild(task);

        const task_tittle = document.createElement("div");
        task_tittle.classList.add("task_tittle");
        task.appendChild(task_tittle);

        task_tittle.innerText = tittle.value;

        const amount_txt = document.createElement("div");
        amount_txt.classList.add("amount_txt");
        task.appendChild(amount_txt);
        amount_txt.innerText = amount.value;

        const category_txt = document.createElement("div");
        category_txt.classList.add("category_txt");
        task.appendChild(category_txt);
        category_txt.innerText = category.value;


        const date_txt = document.createElement("div");
        date_txt.classList.add("date_txt");
        task.appendChild(date_txt);
        date_txt.innerText = date.value;
        amounttracker();
        finalamount();

    }else if(type.value == "expense"){
        const expense_task = document.createElement("div");
        expense_task.classList.add("box");
        box2.appendChild(expense_task);


        
        const task_tittle = document.createElement("div");
        task_tittle.classList.add("task_tittle");
        expense_task.appendChild(task_tittle);
        task_tittle.innerText = tittle.value;

                
        const amount_txt = document.createElement("div");
        amount_txt.classList.add("amount_txt");
        expense_task.appendChild(amount_txt);
        amount_txt.innerText = amount.value;


        const category_txt = document.createElement("div");
        category_txt.classList.add("category_txt");
        expense_task.appendChild(category_txt);
        category_txt.innerText = category.value;


        const date_txt = document.createElement("div");
        date_txt.classList.add("date_txt");
        expense_task.appendChild(date_txt);
        date_txt.innerText = date.value;

        amounttracker();
        finalamount();
    
    }
})

function amounttracker(){
    if(type.value == "earning" ){
        let earning_amount = Number(earning.innerText);
        let earning_add = Number(amount.value);
        earning.innerText =Number(earning_amount + earning_add);

        
    }
    else if(type.value == "expense" ){
        let expense_amount = Number(expense.innerText);
        let expense_add = Number(amount.value);
        expense.innerText = Number(expense_amount + expense_add);

        
    }
}
 function finalamount(){
    
    let amount_left = Number(earning.innerText) - Number(expense.innerText) ;
    total.innerText = amount_left;
 }
