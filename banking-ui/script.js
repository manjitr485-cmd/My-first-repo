let balance = 0;

const balanceDisplay = document.getElementById("balance");
const addButtons = document.querySelectorAll(".add-btn");
const withdrawBtn = document.getElementById("withdrawBtn");
const withdrawInput = document.getElementById("withdrawAmount");
const message = document.getElementById("message");
const transactionList = document.getElementById("transactionList");

// Function to update balance in UI (DOM Manipulation)
function updateBalance() {
    balanceDisplay.textContent = "₹" + balance;
}

// Function to add transaction to history
function addTransaction(text) {
    const li = document.createElement("li");
    li.textContent = text;
    transactionList.appendChild(li);
}

// Event Handling for Deposit Buttons
addButtons.forEach(button => {
    button.addEventListener("click", function () {
        const amount = parseInt(this.dataset.amount);
        balance += amount;
        updateBalance();
        addTransaction("Deposited ₹" + amount);
        message.textContent = "";
    });
});

// Event Handling for Withdraw Button
withdrawBtn.addEventListener("click", function () {
    const amount = parseInt(withdrawInput.value);

    if (!amount || amount <= 0) {
        message.textContent = "Enter valid amount!";
        return;
    }

    // Conditional Logic
    if (amount > balance) {
        message.textContent = "Insufficient Balance!";
    } else {
        balance -= amount;
        updateBalance();
        addTransaction("Withdrew ₹" + amount);
        message.textContent = "";
    }

    withdrawInput.value = "";
});