
function returns_calculator() {
	var min=11.5; 
    var max=12.5;  
    var random = Math.random() * (+max - +min) + +min; 
	return random.toFixed(2)
}