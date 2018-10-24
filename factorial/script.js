//factorial algorithm 

//we need to set up a function that will take the factorial as a parameter 

function factorial(number) {
	let result = 1; 

	//use a for loop to iterate through the parameter
	for(let i = 2; i <= number; i+=1) {
		result *= i; 
	}

	return result; 
}

