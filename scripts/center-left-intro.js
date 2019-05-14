var container = document.getElementById('intros');
var children = container.children;

var containerHeight = container.offsetHeight;
var usedHeightByChildren = children[0].offsetHeight + children[1].offsetHeight + children[2].offsetHeight;

var margin = (containerHeight - usedHeightByChildren)/2;

var child0_bottom = children[0].offsetTop + children[0].offsetHeight;

children[1].style.top = (child0_bottom + margin) + 'px';