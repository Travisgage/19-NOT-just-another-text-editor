const butInstall = document.getElementById('buttonInstall');
// butInstall.classList.add('hidden')
let deferredPrompt;

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.display = 'block';
});

// click event handler for `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    // display prompt
    promptEvent.prompt();
    window.deferredPrompt = null;
    // Hide install button
    butInstall.style.display = 'none';
});

// event handler for `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});
