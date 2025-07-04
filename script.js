function calculateTip(){
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercent = parseFloat(document.getElementById("tip").value);
    const people = parseInt(document.getElementById("people").value);


    const resultDiv = document.getElementById("result");


    if(isNaN(bill) || bill<= 0 || isNaN(people) || people <= 0){
        resultDiv.innerText = "Please enter valid values.";
        resultDiv.style.color ="#dc3545";
        return;
    }

    const tipAmount = (bill * tipPercent) / 100;
    const total = bill + tipAmount;
    const perPerson = total /people;


    resultDiv.style.color ="#29a745";
    resultDiv.innerHTML = `💸 Tip: ₹${tipAmount.toFixed(2)}<br>
        🧾 Total: ₹${total.toFixed(2)}<br>
        👥 Per Person: ₹${perPerson.toFixed(2)}
      `;
}