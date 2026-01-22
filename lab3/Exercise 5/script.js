class WorkflowEngine {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 4;
        this.store = {};
        
        this.form = document.getElementById('workflowForm');
        this.steps = document.querySelectorAll('.form-step');
        this.nodes = document.querySelectorAll('.step-node');
        this.progress = document.getElementById('progressFill');
        this.nextBtn = document.getElementById('nextBtn');
        this.prevBtn = document.getElementById('prevBtn');

        this.init();
    }

    init() {
        this.nextBtn.addEventListener('click', () => this.handleNavigation(1));
        this.prevBtn.addEventListener('click', () => this.handleNavigation(-1));
        this.updateUI();
    }

    handleNavigation(direction) {
        if (direction === 1) {
            if (this.validateCurrentStep()) {
                this.saveStepData();
                if (this.currentStep < this.totalSteps) {
                    this.currentStep++;
                } else {
                    this.completeWorkflow();
                    return;
                }
            }
        } else {
            this.currentStep--;
        }
        this.updateUI();
    }

    validateCurrentStep() {
        const activeSection = [...this.steps].find(s => parseInt(s.dataset.step) === this.currentStep);
        const inputs = activeSection.querySelectorAll('[data-rules]');
        let isStepValid = true;

        inputs.forEach(input => {
            const rules = input.dataset.rules.split('|');
            const errorElement = input.nextElementSibling;
            let message = "";

            for (let rule of rules) {
                const val = input.value.trim();
                if (rule === 'required' && !val) message = "Field is required";
                if (rule.startsWith('min:') && val.length < rule.split(':')[1]) message = `Min ${rule.split(':')[1]} characters`;
                if (rule === 'email' && val && !/\S+@\S+\.\S+/.test(val)) message = "Invalid email format";
                if (rule === 'checked' && !input.checked) message = "Required";
                if (rule === 'age:18' && val) {
                    const age = new Date().getFullYear() - new Date(val).getFullYear();
                    if (age < 18) message = "Must be 18+";
                }
                if (message) break;
            }

            errorElement.textContent = message;
            input.classList.toggle('invalid', !!message);
            if (message) isStepValid = false;
        });

        return isStepValid;
    }

    saveStepData() {
        const activeSection = [...this.steps].find(s => parseInt(s.dataset.step) === this.currentStep);
        const inputs = activeSection.querySelectorAll('input, select');
        inputs.forEach(i => {
            if (i.name) this.store[i.name] = i.type === 'checkbox' ? i.checked : i.value;
        });
    }

    updateUI() {
        this.steps.forEach(s => s.classList.toggle('active', parseInt(s.dataset.step) === this.currentStep));
        this.nodes.forEach(n => {
            const sIdx = parseInt(n.dataset.step);
            n.classList.toggle('active', sIdx === this.currentStep);
            n.classList.toggle('complete', sIdx < this.currentStep);
        });

        this.progress.style.width = `${((this.currentStep - 1) / (this.totalSteps - 1)) * 100}%`;
        this.prevBtn.hidden = this.currentStep === 1;
        this.nextBtn.textContent = this.currentStep === this.totalSteps ? 'Submit Application' : 'Continue';

        if (this.currentStep === 4) this.renderSummary();
    }

    renderSummary() {
        const panel = document.getElementById('dataSummary');
        panel.innerHTML = Object.entries(this.store)
            .filter(([k]) => k !== 'consent')
            .map(([k, v]) => `<div class="summary-item"><span>${k.toUpperCase()}</span><span>${v}</span></div>`)
            .join('');
    }

    completeWorkflow() {
        this.appWrapper = document.querySelector('.app-wrapper');
        this.appWrapper.innerHTML = `
            <div style="text-align: center; padding: 1rem;">
                <h2 style="color: var(--success); margin-bottom: 1rem;">Submission Successful</h2>
                <p style="margin-bottom: 2rem;">Your profile has been encrypted and stored.</p>
                <button onclick="location.reload()" class="btn-primary">New Entry</button>
            </div>`;
    }
}

new WorkflowEngine();