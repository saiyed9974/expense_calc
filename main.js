const Expense = document.querySelector("#expenseId");
const Amount = document.querySelector("#amountId");
const ActionBtn = document.querySelector("#btnAdd");
const HeadingTotal = document.querySelector("#headingEle");
const ExpenseTable = document.querySelector("#expensetab")

let allexpense = [];
let TotalExpense = 0;




ActionBtn.addEventListener("click",function clickHandler(){

    let expenseitem = {};

    expenseitem.desc = Expense.value;
    expenseitem.amount = Amount.value;
    expenseitem.todaydate = new Date();

    allexpense.push(expenseitem);

    let expenseAmt = parseInt(expenseitem.amount);

    TotalExpense = TotalExpense + expenseAmt;

    HeadingTotal.textContent = `Total Expense :${TotalExpense}`;


    renderHtml(allexpense);

  })

function getdatestring(todaydate){
    return todaydate.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
}

function renderHtml(ArrofList) {

    const allExpenseHtml = ArrofList.map(item=>{ 

        return createExpList(item)
     
    })
 
    const joinhtml = allExpenseHtml.join("");
 
                            
     ExpenseTable.innerHTML = joinhtml;
 


}



function createExpList({desc,amount,todaydate}) {

    return `<li class='list-group-item d-flex justify-content-between'>
        
    <div class="d-flex flex-column"> ${desc}

    <small class="text-muted">${getdatestring(todaydate)}</small>
    </div>
    <div>
 
    <span class="px-1">${amount}</span>
    <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteItem(${todaydate.valueOf()})" >
    <i class="fas fa-trash-alt"></i>
</button>
    </div>
    </li>
`

}


function deleteItem(datevalue){

console.log("delete button clicked",datevalue);

newArr = [];
    
for(let i = 0; i<allexpense.length;i++)

{

        console.log(allexpense[i].todaydate.valueOf());

    if(allexpense[i].todaydate.valueOf()!==datevalue)
    {
        newArr.push(allexpense[i]);
    }


}


}