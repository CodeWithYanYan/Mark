// JavaScript function to handle form submission via AJAX
$(document).ready(function() {
    $("#userForm").on("submit", function(event) {
        event.preventDefault();

        const button = document.getElementById('button');

        button.addEventListener('click', () => {
            const user = document.getElementById('userName');
            const password = document.getElementById('password');

            const username = user.value;
            const passwordElement = password.value;

            if (button) {
                if (username === 'admin' && passwordElement === 'admin') {
                    alert('successfulyl login');
                    window.location = 'view.html';
                } else {
                    alert ('please input required fields');
                }
            }
        });
    });
});
