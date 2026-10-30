const dialog = document.querySelector('.image-dialog');
let opener;
for (const button of document.querySelectorAll('[data-image]')) {
  button.addEventListener('click', () => {
    opener = button;
    const image = document.createElement('img');
    dialog.querySelector('.lightbox-image').replaceChildren(image);
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    dialog.querySelector('#lightbox-caption').textContent = button.dataset.caption || image.alt;
    dialog.showModal();
  });
}
dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => opener?.focus({ preventScroll: true }));
const search = document.querySelector('#feature-search');
if (search) {
  const items = [...document.querySelectorAll('.catalog-item')];
  const groups = [...document.querySelectorAll('.catalog-group')];
  const update = () => {
    const words = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const item of items) {
      const text = `${item.closest('.catalog-group').querySelector('h2').textContent} ${item.textContent}`.toLocaleLowerCase();
      item.hidden = !words.every(word => text.includes(word));
      if (!item.hidden) count++;
    }
    for (const group of groups) group.hidden = ![...group.querySelectorAll('.catalog-item')].some(item => !item.hidden);
    document.querySelector('#feature-count').textContent = `${count} of ${items.length} feature details${words.length ? ' match your search' : ''}`;
    document.querySelector('#feature-empty').hidden = count !== 0;
  };
  search.addEventListener('input', update);
  document.querySelector('[data-clear-search]').addEventListener('click', () => { search.value = ''; update(); search.focus(); });
  update();
}
