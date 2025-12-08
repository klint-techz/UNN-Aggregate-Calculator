function calculate() {
    console.log("Calculate button clicked");

    let jamb = parseFloat(document.getElementById('jambScore').value);
    let grade1 = parseFloat(document.getElementById('g1').value);
    let grade2 = parseFloat(document.getElementById('g2').value);
    let grade3 = parseFloat(document.getElementById('g3').value);
    let grade4 = parseFloat(document.getElementById('g4').value);
    let sitting = parseFloat(document.getElementById('sitting').value);

  

    if (isNaN(jamb)) {
        alert("Please enter your JAMB score");
        return;
    }

    let olevelSum = grade1 + grade2 + grade3 + grade4;
    if (sitting === 1) olevelSum += 40;

    let totalAggregate = jamb * 0.9 + olevelSum * 0.1;

    console.log("Total Aggregate:", totalAggregate);

    document.getElementById('resultBox').innerHTML = `Your Aggregate is ${totalAggregate.toFixed(2)}`;
}