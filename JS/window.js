//alert("Добро пожаловать!");

document.getElementById('contents').onclick = function(event) {
    
    function handleLink(href) {
        var l = confirm('Возможна утрата данных при переходе!');
        if (!l) return false;
    }
    
    var target = event.target;
    
    while (target != this) {
        if (target.nodeName == 'A') {
            return handleLink(target.getAttribute('href'));
        }
        target = target.parentNode;
    }
}