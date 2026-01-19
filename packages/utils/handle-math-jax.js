const handleMathJax = (rerun = false) => {
    if (typeof window === 'undefined') {
      return;
    }
  
    const mathjaxScript = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js';
    if (!window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: [['\\(', '\\)']],
        },
        output: {  
          displayOverflow: 'linebreak',
        },
      };
    }
  
    let mathjaxScriptTag = document.querySelector(`script[src="${mathjaxScript}"]`);
    if (!mathjaxScriptTag) {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = mathjaxScript;
      script.onload = function () {
        window.MathJax && window.MathJax.typeset();
      };
      document.head.appendChild(script);
    } else if (rerun) {
        window.MathJax && window.MathJax.typeset();
    }
};
  
export default handleMathJax;
  
