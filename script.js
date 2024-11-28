function convertBinaryToDecimal() {
    // Získáme binární číslo z inputu
    let binaryNumber = document.getElementById('binaryInput').value;
    
    // Zkontrolujeme, zda je číslo platné binární (může obsahovat pouze 0 a 1)
    if (/^[01]+$/.test(binaryNumber)) {
        // Použijeme parseInt pro převod z binární do desítkové soustavy
        let decimalNumber = parseInt(binaryNumber, 2);
        // Zobrazíme výsledek
        document.getElementById('result').innerText = `Desítková hodnota: ${decimalNumber}`;
    } else {
        // Pokud není platné binární číslo
        document.getElementById('result').innerText = "Prosím zadejte platné binární číslo (0 a 1).";
    }
}
