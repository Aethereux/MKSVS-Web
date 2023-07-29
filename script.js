window.onload = function() {
    const content = document.getElementById('content');
    
    content.animate([
      // keyframes
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-300px)' }
    ], {
      // timing options
      duration: 1000,
      iterations: Infinity
    });
  };
  
  