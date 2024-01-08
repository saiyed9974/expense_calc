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

   const allExpenseHtml = allexpense.map(item=>{

        return `<ul>
                <li>${item.desc} <span>${item.amount}</span></li>

        </ul>`

   })

   const joinhtml = allExpenseHtml.join("");

                           
    ExpenseTable.innerHTML = joinhtml;
})


