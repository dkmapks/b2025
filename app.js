function showDocument(docType) {
    const documentDetails = document.getElementById('documentDetails');
    let content = '';

    switch (docType) {
        case 'idCard':
            content = `<h3>Dowód Osobisty</h3><p>Numer: ABC123456</p><p>Imię: Jan</p><p>Nazwisko: Kowalski</p>`;
            break;
        case 'driverLicense':
            content = `<h3>Prawo Jazdy</h3><p>Numer: XYZ7890</p><p>Imię: Jan</p><p>Nazwisko: Kowalski</p>`;
            break;
        // Dodaj więcej przypadków dla innych dokumentów
    }

    documentDetails.innerHTML = content;
}
