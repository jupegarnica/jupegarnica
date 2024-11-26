document.addEventListener('DOMContentLoaded', () => {
  const projectRows = document.querySelectorAll('.project');
  projectRows.forEach(row => {
    row.addEventListener('click', () => {
      const iframeContainer = row.querySelector('div.absolute');
      const iframe = iframeContainer.querySelector('iframe');

      if (iframeContainer.style.height === '0px' || iframeContainer.style.height === '') {
        iframeContainer.style.height = '500px';
        iframeContainer.style.border = '1px solid #ccc';
        iframe.src = iframe.dataset.src;
      } else {
        iframeContainer.style.height = '0px';
        iframeContainer.style.border = 'none';
        iframe.src = '';
      }
    });

    row.addEventListener('mouseleave', () => {
      const iframeContainer = row.querySelector('div.absolute');
      const iframe = iframeContainer.querySelector('iframe');
      iframeContainer.style.height = '0px';
      iframeContainer.style.border = 'none';
      // iframe.src = '';
    });
  });
});
