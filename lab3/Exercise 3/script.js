const surveyQuestions = [
    {
        id: "q1",
        type: "text",
        label: "Full Name",
        required: true,
        limit: 50
    },
    {
        id: "q2",
        type: "radio",
        label: "How would you rate our service?",
        options: ["Excellent", "Good", "Fair", "Poor"],
        required: true
    },
    {
        id: "q3",
        type: "checkbox",
        label: "Which features did you use? (Select at least 2)",
        options: ["Dashboard", "Reports", "Billing", "Mobile App"],
        required: true,
        minSelection: 2
    },
    {
        id: "q4",
        type: "text",
        label: "Additional Comments",
        required: false,
        limit: 200
    }
];

const container = document.getElementById('survey-container');
const form = document.getElementById('dynamic-form');

function generateForm() {
    surveyQuestions.forEach((q) => {
        const block = document.createElement('div');
        block.className = 'question-block';
        block.id = `block-${q.id}`;

        const label = document.createElement('label');
        label.innerText = q.required ? `${q.label} *` : q.label;
        block.appendChild(label);

        if (q.type === 'text') {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = q.id;
            input.placeholder = `Max ${q.limit} characters`;
            block.appendChild(input);
        } else if (q.type === 'radio' || q.type === 'checkbox') {
            const group = document.createElement('div');
            group.className = 'options-group';
            q.options.forEach(opt => {
                const optLabel = document.createElement('label');
                optLabel.style.fontWeight = "normal";
                const input = document.createElement('input');
                input.type = q.type;
                input.name = q.id;
                input.value = opt;
                optLabel.prepend(input);
                optLabel.append(` ${opt}`);
                group.appendChild(optLabel);
            });
            block.appendChild(group);
        }

        const error = document.createElement('div');
        error.className = 'error-message';
        error.id = `error-${q.id}`;
        block.appendChild(error);

        container.appendChild(block);
    });
}

function validateForm(e) {
    e.preventDefault();
    let isValid = true;

    surveyQuestions.forEach(q => {
        const block = document.getElementById(`block-${q.id}`);
        const errorEl = document.getElementById(`error-${q.id}`);
        let errorMsg = "";

        if (q.type === 'text') {
            const val = document.getElementById(q.id).value.trim();
            if (q.required && val === "") {
                errorMsg = "This field is required.";
            } else if (val.length > q.limit) {
                errorMsg = `Maximum ${q.limit} characters allowed.`;
            }
        } else if (q.type === 'radio') {
            const checked = document.querySelector(`input[name="${q.id}"]:checked`);
            if (q.required && !checked) {
                errorMsg = "Please select an option.";
            }
        } else if (q.type === 'checkbox') {
            const checkedCount = document.querySelectorAll(`input[name="${q.id}"]:checked`).length;
            if (q.required && checkedCount < (q.minSelection || 1)) {
                errorMsg = `Please select at least ${q.minSelection || 1} options.`;
            }
        }

        if (errorMsg) {
            block.classList.add('invalid');
            errorEl.innerText = errorMsg;
            errorEl.style.display = 'block';
            isValid = false;
        } else {
            block.classList.remove('invalid');
            errorEl.style.display = 'none';
        }
    });

    if (isValid) {
        form.classList.add('hidden');
        document.getElementById('success-msg').classList.remove('hidden');
    }
}

generateForm();
form.addEventListener('submit', validateForm);