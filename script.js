document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const gender = document.getElementById('gender').value;
    const symptom = document.getElementById('symptom').value;

    // Store the selected symptom and gender in localStorage
    localStorage.setItem('selectedGender', gender);
    localStorage.setItem('selectedSymptom', symptom);

    // Redirect to results.html
    window.location.href = 'results.html';
});
