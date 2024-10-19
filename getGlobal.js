if (window.Global) {
  window.postMessage({ type: 'Global', payload: window.Global }, '*');
}
