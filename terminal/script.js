document.addEventListener('DOMContentLoaded', () => {
    const terminalText = document.querySelector('.terminal-text');
    const terminalCursor = document.querySelector('.terminal-cursor');
    const terminalOutput = document.querySelector('.terminal-output');
    const terminalContent = document.querySelector('.terminal-content');
    const copyButton = document.querySelector('.copy-button');
    const copyIcon = document.querySelector('.copy-icon');
    const checkIcon = document.querySelector('.check-icon');
    
    let text = '';
    let fontSize = 18;
    let cursorVisible = true;
    let copied = false;
//     const fullText = `Welcome to the Terminal Interface!
// $ npm install awesome-package
// Installing...
// Successfully installed awesome-package!
// $ echo "Hello, World!"
// Hello, World!
// $ for i in {1..20}; do echo "Line $i: This is a very long line of text to demonstrate the scrolling behavior in our terminal interface."; done
// Line 1: This is a very long line of text to demonstrate the scrolling behavior in our terminal interface.
// Line 2: This is a very long line of text to demonstrate the scrolling behavior in our terminal interface.
// ...
// Line 20: This is a very long line of text to demonstrate the scrolling behavior in our terminal interface.
// $ `;

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < fullText.length) {
            text = fullText.slice(0, i + 1);
            terminalText.textContent = text;
            i++;
            adjustFontSize();
        } else {
            clearInterval(typingInterval);
        }
    }, 50);

    const cursorInterval = setInterval(() => {
        cursorVisible = !cursorVisible;
        terminalCursor.style.display = cursorVisible ? 'inline-block' : 'none';
    }, 500);

    function adjustFontSize() {
        if (terminalOutput && terminalContent) {
            const container = terminalOutput;
            const content = terminalContent;
            let size = fontSize;
            content.style.fontSize = `${size}px`;
            
            while (content.scrollHeight > container.clientHeight && size > 8) {
                size--;
                content.style.fontSize = `${size}px`;
            }

            fontSize = size;
        }
    }
    
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(text).then(() => {
          copied = true;
          copyIcon.classList.add('hidden');
          checkIcon.classList.remove('hidden');
          copyButton.closest('.tooltip-container').querySelector('.tooltip p').textContent = 'Copied!';
    
          setTimeout(() => {
              copied = false;
              copyIcon.classList.remove('hidden');
              checkIcon.classList.add('hidden');
              copyButton.closest('.tooltip-container').querySelector('.tooltip p').textContent = 'Copy to clipboard';
          }, 2000);
        });
      });


    window.addEventListener('resize', adjustFontSize);

    // Optional: Clean up the intervals if the DOM is removed
    // This is not strictly needed in this case, but good practice.
    window.addEventListener('beforeunload', () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
    });
});