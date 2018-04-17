Creator: Sean Raymond
Version #: 0.0.1

### What is the purpose of me making this?

	I have challenged myself to create, by December 31st, 2018, a simple neural network able to solve non linearly separable equations such as XOR.
	I am doing this in JavaScript due to imposed challenges that colleagues/peers/professionals around me think I cannot overcome easily.
	I am also doing this in JavaScript because it is a language I already have learned enough to a point to use it well.
		I have not yet taught myself Python or C# like I want, so therefor this Neural Network will exist in JavaScript.
			It is possible I will re write this in Python/C# later.
	I am also doing this to prove to myself that I have a higher than basic understanding of JavaScript.
	This particular library, Matrix (to be named later), will be used for the Neural Network. It is the basic data structure I have chosen for this project.

	I want to accomplish this for another three main goals:
		I have, since the beginning of learning JavaScript, wanted to create a library. With this project I am going to create two.
		I have acquired a sense of curiosity towards machine learning and would like to delve into the field with a basic self created Network.
			I am not doing this to try to reinvent the wheel or to try to compete with other libraries. I know that there will be parts of my library that can be refactored in a much better way. I have been using
			JavaScript for less than half of a year.
			I am doing this because I want to.
		I would like to further my knowledge / push the limits of my knowledge on JavaScript and the programming mentality.



### To cover some bases:

	I have chosen matrices as my data structure as I do not know of another data structure that I could implement with my limited knowledge.
	I have chosen JavaScript(for the TLDRs) because I already have a basic understanding of it and would like to push that further.



My goals for this Matrix Library(to be named at a later date) is to be able to create a matrix object.
	This matrix object will have Xv0 number of columns, Xv1 number of rows, and an empty array I will call data.
		"data" will be initialized when the object is created to have values of 0 unless the "randomize" method randomizes the numbers chosen with the Math.random vanilla JavaScript function.
			I am choosing to use random numbers to save myself the hassle of other methods of sophisticated number picking which I can implement at any point later on.
				I could potentially decide to initialize all of the data in the array as 0, however I feel this may hinder the Neural Network should it ever get more advanced.
		"data"'s initialization will create a "two dimensional array" to store the data in a row-column layout to be able to index through them.


This Matrix object that is created should also have methods to manipulate or create new matrixes based on the nature of the method.
	One of these being a map(); function that allows me to pass in a function as a parameter to modify the data in that way instead of with the built in methods.



---

## Documentation:


	The static Scalar and elementwise products return the entire object. They do not return the data. To use the data arrays, you must reference the product as "name".data.
		Scalar meaning the data at index i,j plus a variable/number, not another array value
		This occurs because there is a possible time and place when the user might want to reference a different part of the returned object.
			I am trying to make this library flexible enough to be used outside of my neural network.
