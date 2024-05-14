document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.check');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const confirmationDialog = document.getElementById('confirmationDialog');
            const confirmButton = document.getElementById('confirmButton');

            if (this.checked) {
                confirmationDialog.style.display = 'block';

                confirmButton.onclick = () => {
                    const row = this.closest('tr');
                    row.parentNode.removeChild(row);
                    confirmationDialog.style.display = 'none';
                    showNotification('تم حذف الإنذار بنجاح');
                    this.checked = false; // reset checkbox
                };

                const cancelButton = document.getElementById('cancelButton');
                cancelButton.onclick = () => {
                    this.checked = false;
                    confirmationDialog.style.display = 'none';
                };
            }
        });
    });

    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => {
                notification.classList.remove('show', 'hide');
            }, 500); // Match the CSS opacity transition time
        }, 3000); // Time the notification is visible
    }
});