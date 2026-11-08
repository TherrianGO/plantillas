const dialog = document.querySelector('dialog');

document.querySelectorAll('[data-demo]').forEach(button =>
  button.addEventListener('click', () => {
    dialog.showModal();
  })
);

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
