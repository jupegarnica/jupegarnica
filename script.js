document.addEventListener('DOMContentLoaded', () => {
  const projectRows = document.querySelectorAll('.project');
  console.log({projectRows});


  projectRows.forEach(row => {
    row.addEventListener('click', () => {
      const iframeContainer = row.querySelector('div.absolute');
      const iframe = iframeContainer.querySelector('iframe');

      if (iframeContainer.style.height === '0px' || iframeContainer.style.height === '') {
        iframeContainer.style.height = '500px';
        iframe.src = iframe.dataset.src;
      } else {
        iframeContainer.style.height = '0px';
        iframe.src = '';
      }
    });
  });
});
