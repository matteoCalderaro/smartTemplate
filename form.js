document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('demo-form');
    const steps = Array.from(document.querySelectorAll('.form-step'));
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });
    }

    document.getElementById('next-step-1').addEventListener('click', () => {
        const selectedApps = document.querySelectorAll('#step-1 input[type="checkbox"]:checked');
        if (selectedApps.length === 0) {
            alert('Seleziona almeno un\'applicazione.');
            return;
        }
        currentStep = 1;
        showStep(currentStep);
    });

    document.getElementById('prev-step-2').addEventListener('click', () => {
        currentStep = 0;
        showStep(currentStep);
    });

    document.getElementById('next-step-2').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name.trim() === '' || email.trim() === '') {
            alert('Nome e Email sono campi obbligatori.');
            return;
        }
        currentStep = 2;
        showStep(currentStep);
    });

    document.getElementById('prev-step-3').addEventListener('click', () => {
        currentStep = 1;
        showStep(currentStep);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const privacy1 = document.getElementById('privacy-1').checked;
        if (!privacy1) {
            alert('Devi accettare l\'informativa sulla privacy.');
            return;
        }
        // Here you would typically send the form data to a server
        alert('Richiesta inviata con successo!');
        form.reset();
        currentStep = 0;
        showStep(currentStep);
    });

    showStep(currentStep);
});