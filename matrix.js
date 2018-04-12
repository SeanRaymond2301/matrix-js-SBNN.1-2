
    //Allows the user to create a matrix object with Nv0 rows, Nv1 columns, and random values in a 2 dimensional array
function Matrix(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (let i = 0; i < this.cols; i++) {
        this.data[i] = [];
        for (let j = 0; j < this.orws; j++) {
            this.data[i][j] = 0;
        }
    }


        //Initializing the data with random values between 0 and 1
    this.randomize = function() {
        for (let i = 0; i < this.cols; i++) {
            this.data[i] = [];
            for(let j = 0; j < this.rows; j++) {
                this.data[i][j] = Math.random();
            }
        }
    }

        //Returns the matrix using this method with "data" being modified.
            //I will add a static version of this that returns a new array, and takes two parameters instead of one.
    this.add = function(m2) {
        if (typeof(m2) == 'object') {
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


    this.multiply = function(m2) {
        if (typeof(m2) == 'object') {
            if (this.rows == m2.rows && this.cols == m2.cols) {
                for (let i = 0; i < this.cols; i++) {
                    for (let j = 0; j < this.rows; j++) {
                        this.data[i][j] *= m2.data[i][j];
                    }
                }
                return this.data;
            } else {
                return;
            }
        }
    }

    this.rotate = function() {
        var a = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                a.data[i].push(this.data[j][i]);
            }
        }
        return a.data;
    }

}

    //Creates a new matrix
function add(m1, m2) {
    if(typeof(m1) == 'object' && typeof(m2) == 'object') {
        var a = new Matrix(m1.rows, m1.cols);
        if (m1.rows == m2.rows && m1.cols == m2.cols) {
            for (let i = 0; i < m1.rows; i++) {
                for (let j = 0; j < m2.rows; j++) {
                    a.data[i][j] = m1.data[i][j] + m2.data[i][j];
                }
            }
            return a.data;
        } else {
        return;
        }
    }
}

function multiply(m1, m2) {
    if(typeof(m1) == 'object' && typeof(m2) == 'object') {
        var a = new Matrix(m1.rows, m1.cols);
        if (m1.rows == m2.rows && m1.cols == m2.cols) {
            for (let i = 0; i < m1.rows; i++) {
                for (let j = 0; j < m2.rows; j++) {
                    a.data[i][j] = m1.data[i][j] * m2.data[i][j];
                }
            }
            return a.data;
        } else {
        return;
        }
    }
}

function dotProduct(m1, m2) {

}
