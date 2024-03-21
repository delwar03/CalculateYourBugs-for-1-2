function calculateCGPA() {
    const DS = parseFloat(document.getElementById("DS").value);
    const DS_lab = parseFloat(document.getElementById("DS_lab").value);
    const CAL = parseFloat(document.getElementById("CAL").value);
    const EEE = parseFloat(document.getElementById("EEE").value);
    const EEE_lab = parseFloat(document.getElementById("EEE_lab").value);
    const ETH = parseFloat(document.getElementById("ETH").value);
    const IPE_GRAPH = parseFloat(document.getElementById("IPE_GRAPH").value);
    const IPE_WORK = parseFloat(document.getElementById("IPE_WORK").value);
    const PHY = parseFloat(document.getElementById("PHY").value);
    const PRO = parseFloat(document.getElementById("PRO").value);

    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");

    // Check if inputs are valid
    if (isNaN(DS) || isNaN(DS_lab) || isNaN(CAL) || isNaN(EEE) ||
        isNaN(EEE_lab) || isNaN(ETH) || isNaN(IPE_GRAPH) || isNaN(IPE_WORK) || isNaN(PHY) || isNaN(PRO)
        || DS < 0 || DS > 4
        || DS_lab < 0 || DS_lab > 4
        || CAL < 0 || CAL > 4
        || EEE < 0 || EEE > 4
        || EEE_lab < 0 || EEE_lab > 4
        || ETH < 0 || ETH > 4
        || IPE_GRAPH < 0 || IPE_GRAPH > 4
        || IPE_WORK < 0 || IPE_WORK > 4
        || PHY < 0 || PHY > 4
        || PRO < 0 || PRO > 4) {
        errorElement.innerHTML = "Please enter valid values.";
        resultElement.innerHTML = "";
    } else {
        errorElement.innerHTML = "";
        const result = (((DS * 3.0) + (DS_lab * 2.0) + (CAL * 3.0) + (EEE * 3.0) + (EEE_lab * 1.5)
                         +  (ETH * 2.0) + (IPE_GRAPH * 1.5) + (IPE_WORK * 1.0) + (PHY * 3.0) + (PRO * 1.0)) / 21).toFixed(2);
        resultElement.innerHTML = `Yooo!🔥 Your CGPA is: ${result}`;
    }
}