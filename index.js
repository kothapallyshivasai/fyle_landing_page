document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.nextElementSibling.textContent = this.nextElementSibling.textContent.replace('*', '');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.nextElementSibling.textContent += '*';
        }
    });
});

function submit_button(event){
    event.preventDefault();  
    event.target.form.submit();
    document.getElementById("work-email").value = "";
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("check_box").checked = false;
}
