document.addEventListener('DOMContentLoaded', function() {
    const carMakeSelect = document.getElementById('carMake');
    const carModelSelect = document.getElementById('carModel');
    const fuelTypeRadio = document.querySelectorAll('input[name="fuelType"]');
    const engineInput = document.getElementById('engine');
    const conditionRadio = document.querySelectorAll('input[name="condition"]');
    const ownerCountRadio = document.querySelectorAll('input[name="ownerCount"]');
    const paymentSelect = document.querySelectorAll('input[name="payment"]');
    const yearInput = document.getElementById('year');
    const carPriceDiv = document.getElementById('carPrice');

    const carModels = {
        Mercedes: ['CLK-class', 'GT-class', 'X-class'],
        Toyota: ['Prius', 'RAV4', 'Aqua', 'Camry'],
        Nissan: ['March', 'Rogue', 'Juke', 'Leaf'],
        Jaguar: ['F-Pace', 'XF', 'XE', 'Daimler']
    };

    // Функция для обновления списка моделей
    function updateCarModelsAndLogo(make) {
        carModelSelect.innerHTML = ''; // Очистить текущий список моделей
        carModels[make].forEach(function(model) {
            const option = document.createElement('option');
            option.textContent = model;
            carModelSelect.appendChild(option);
        });

    const logo = document.getElementById('logo');
    logo.src = `/logos/${make}.png`; // Предполагается, что у вас есть изображения логотипов с названием производителя автомобиля (например, mercedes.png, toyota.png, и т.д.) в папке "logos"
    }

    carMakeSelect.addEventListener('change', function() {
        const selectedMake = carMakeSelect.value;
        updateCarModelsAndLogo(selectedMake);
    });

    const initialMake = carMakeSelect.value;
    updateCarModelsAndLogo(initialMake);

    // Calculate price on form submission
    document.getElementById('carCalculator').addEventListener('submit', function(evt) {
        evt.preventDefault();
        const selectedMake = carMakeSelect.value;
        const selectedModel = modelSelect.value;
        const selectedFuelType = document.querySelector('input[name="fuelType"]:checked').value;
        const engineVolume = engineInput.value;
        const condition = document.querySelector('input[name="condition"]:checked').value;
        const ownerCount = document.querySelector('input[name="ownerCount"]:checked').value;
        const payment = paymentSelect.value;
        // Code to calculate car price based on selected parameters

     function calculatePrice() {
        const selectedMake = carMakeSelect.value;
        const selectedModel = carModelSelect.value;
        const selectedFuelType = document.querySelector('input[name="fuelType"]:checked').value;
        const engineVolume = engineInput.value;
        const condition = document.querySelector('input[name="condition"]:checked').value;
        const ownerCount = document.querySelector('input[name="ownerCount"]:checked').value;
        const payment = document.querySelector('input[name="payment"]:checked').value;
        const year = yearInput.value;

        let basePrice = 0;
    switch (selectedMake) {
        case 'mercedes':
            basePrice = 2000;
            break;
        case 'toyota':
            basePrice = 1500;
            break;
        case 'nissan':
            basePrice = 1300;
            break;
        case 'jaguar':
            basePrice = 4000;
            break;
    }
    switch (selectedFuelType) {
        case 'hybrid':
            basePrice += 500;
            break;
        case 'diesel':
            basePrice += 100;
            break;
        case 'electric':
            basePrice += 600;
            break;
        case 'petrol':
            basePrice += 200;
            break;
    }
    if (condition === 'new') {
        basePrice += 1000;
    }

    if (ownerCount === 'oneTwoOwners') {
        basePrice += 50;
    }

    if (year >= 2009 && year <= 2013) {
        basePrice += 50;
    } else if (year > 2013) {
        basePrice += 120;
    }

    carPriceDiv.textContent = `Car Price: $${basePrice}`;
  }
  carMakeSelect.addEventListener('change', calculatePrice);
  carModelSelect.addEventListener('change', calculatePrice);
  engineInput.addEventListener('input', calculatePrice);
  conditionRadio.forEach(radio => radio.addEventListener('change', calculatePrice));
  ownerCountRadio.forEach(radio => radio.addEventListener('change', calculatePrice));
  fuelTypeRadio.forEach(radio => radio.addEventListener('change', calculatePrice));
  yearInput.addEventListener('input', calculatePrice);
  paymentSelect.forEach(checkbox => checkbox.addEventListener('change', calculatePrice));
        
});
});
