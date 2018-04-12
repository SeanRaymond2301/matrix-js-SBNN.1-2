
    //Allows the user to create a matrix object with Nv0 rows, Nv1 columns, and random values in a 2 dimensional array
function Matrix(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];


        //Initializing the data with random values between 0 and 1
    for (let i = 0; i < this.cols; i++) {
        this.data[i] = [];
        for(let j = 0; j < this.rows; j++) {
            this.data[i][j] = Math.random();
        }
    }


        //Returns the matrix using this method with "data" being modified.
            //I will add a static version of this that returns a new array, and takes two parameters instead of one.
    this.add = function(m2) {
        if (this.rows == m2.rows && this.cols == m2.cols) {
            for (let i = 0; i < this.cols; i++) {
                for (let j = 0; j < this.rows; j++) {
                    this.data[i][j] += m2.data[i][j];
                }
            }
            return this.data;
        } else {
            return;
        }
    }
}
