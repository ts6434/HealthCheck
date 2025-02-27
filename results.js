window.onload = function() {
    const gender = localStorage.getItem('selectedGender');
    const symptom = localStorage.getItem('selectedSymptom');

    let diagnosis = '';

    if (gender === 'male') {
        diagnosis = getMaleDiagnosis(symptom);
    } else if (gender === 'female') {
        diagnosis = getFemaleDiagnosis(symptom);
    } else {
        diagnosis = getOtherDiagnosis(symptom);
    }

    document.getElementById('result').innerHTML = diagnosis;
};

function getMaleDiagnosis(symptom) {
    switch (symptom) {
        case 'Erectile Dysfunction':
            return `<h2>Erectile Dysfunction</h2><p>Possible Diseases: Low Testosterone, Cardiovascular Disease, Diabetes</p><p>Prevention: Regular exercise, healthy diet, weight management.</p><p>Cure: Medications (e.g., Viagra), testosterone therapy, counseling.</p>`;
        case 'Frequent Urination':
            return `<h2>Frequent Urination</h2><p>Possible Diseases: Prostate Enlargement (BPH), Urinary Tract Infection (UTI), Prostate Cancer</p><p>Prevention: Stay hydrated, avoid caffeine and alcohol, healthy diet.</p><p>Cure: Medications, surgery for BPH, antibiotics for UTI.</p>`;
        case 'Fatigue':
            return `<h2>Fatigue</h2><p>Possible Diseases: Sleep Apnea, Chronic Fatigue Syndrome, Anemia</p><p>Prevention: Healthy sleep habits, regular exercise, balanced diet.</p><p>Cure: Treatment of underlying conditions, sleep aids, iron supplements.</p>`;
        case 'Headache':
            return `<h2>Headache</h2><p>Possible Diseases: Tension Headaches, Migraines, Sinusitis</p><p>Prevention: Stress management, staying hydrated, regular sleep.</p><p>Cure: Pain relievers (e.g., Ibuprofen), medications for migraines, decongestants for sinusitis.</p>`;
        case 'Abdominal Pain':
            return `<h2>Abdominal Pain</h2><p>Possible Diseases: Appendicitis, Gallstones, Irritable Bowel Syndrome (IBS)</p><p>Prevention: Healthy diet, regular exercise, avoiding fatty foods.</p><p>Cure: Surgery for appendicitis or gallstones, medication for IBS.</p>`;
        default:
            return `<h2>Unknown Symptom</h2><p>Diagnosis not available.</p>`;
    }
}

function getFemaleDiagnosis(symptom) {
    switch (symptom) {
        case 'Irregular Periods':
            return `<h2>Irregular Periods</h2><p>Possible Diseases: Polycystic Ovary Syndrome (PCOS), Uterine Fibroids, Thyroid Disorders</p><p>Prevention: Regular gynecological exams, balanced diet, stress management.</p><p>Cure: Hormonal treatment, surgery for fibroids, thyroid medication.</p>`;
        case 'Pelvic Pain':
            return `<h2>Pelvic Pain</h2><p>Possible Diseases: Endometriosis, Ovarian Cysts, Pelvic Inflammatory Disease (PID)</p><p>Prevention: Safe sex, avoid douching, healthy lifestyle.</p><p>Cure: Pain relief medications, surgery for cysts or endometriosis, antibiotics for PID.</p>`;
        case 'Fatigue':
            return `<h2>Fatigue</h2><p>Possible Diseases: Anemia, Pregnancy, Hypothyroidism</p><p>Prevention: Regular iron intake, proper prenatal care, balanced diet.</p><p>Cure: Iron supplements for anemia, thyroid hormone therapy for hypothyroidism, rest for pregnancy-related fatigue.</p>`;
        case 'Headache':
            return `<h2>Headache</h2><p>Possible Diseases: Migraines, Tension Headaches, Menstrual Headaches</p><p>Prevention: Stress management, regular sleep, staying hydrated.</p><p>Cure: Pain relievers (e.g., Paracetamol), migraine medications, hormonal treatment for menstrual headaches.</p>`;
        case 'Abdominal Pain':
            return `<h2>Abdominal Pain</h2><p>Possible Diseases: Endometriosis, Pelvic Inflammatory Disease (PID), Ovarian Cysts</p><p>Prevention: Regular gynecological exams, safe sex practices.</p><p>Cure: Pain relief medications, surgery for cysts, antibiotics for PID.</p>`;
        default:
            return `<h2>Unknown Symptom</h2><p>Diagnosis not available.</p>`;
    }
}

function getOtherDiagnosis(symptom) {
    switch (symptom) {
        case 'Coughing':
            return `<h2>Coughing</h2><p>Possible Diseases: Cold, Asthma, Pneumonia</p><p>Prevention: Avoid respiratory irritants, wash hands frequently, get vaccinated.</p><p>Cure: Cough suppressants, inhalers for asthma, antibiotics for pneumonia.</p>`;
        case 'Fever':
            return `<h2>Fever</h2><p>Possible Diseases: Flu, Malaria, Dengue, COVID-19</p><p>Prevention: Get vaccinated, avoid exposure to infected individuals, maintain good hygiene.</p><p>Cure: Antipyretics (e.g., Paracetamol), fluids, rest.</p>`;
        case 'Fatigue':
            return `<h2>Fatigue</h2><p>Possible Diseases: Anemia, Sleep Apnea, Chronic Fatigue Syndrome</p><p>Prevention: Balanced diet, adequate sleep, regular checkups.</p><p>Cure: Treat underlying conditions, iron supplements, sleep therapy.</p>`;
        case 'Headache':
            return `<h2>Headache</h2><p>Possible Diseases: Tension Headaches, Migraines, Sinusitis</p><p>Prevention: Stress management, staying hydrated, regular sleep.</p><p>Cure: Pain relievers (e.g., Ibuprofen), medications for migraines, decongestants for sinusitis.</p>`;
        default:
            return `<h2>Unknown Symptom</h2><p>Diagnosis not available.</p>`;
    }
}
