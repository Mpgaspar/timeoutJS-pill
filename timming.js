$('#btnTime').click(function() {
    setTimeout(function() {
        alert('Hello World! After 5 seconds.');
      }, 5000)
});

$('#btnInterval').click(function() {
    setInterval(function() {
        alert('Hello World!');
      }, 30000)
});
