# Roman Numeral Converter

#### This application converts numbers to roman numerals, 8-18-16

#### By Jackson Meyer, Anthony Bottemiller

## Description

The purpose of this application is to convert base 10 numbers to roman numerals as an exercise for Epicodus.

## Specifications

when user input a 1 in our text box, the application will spit out our roman numeral I.

example input: 1
example output: I

when user input a 5 in our text box, the application will spit out our roman numeral V.

example input: 5
example output: V

when user input a 10 in our text box, the application will spit out our roman numeral X  .

example input: 10
example output: X

when user input a 50 in our text box, the application will spit out our roman numeral L.

example input: 50
example output: L

when user input a 100 in our text box, the application will spit out our roman numeral C.

example input: 100
example output: C

when user input a 500 in our text box, the application will spit out our roman numeral D.

example input: 500
example output: D

when user input a 1000 in our text box, the application will spit out our roman numeral M.

example input: 1000
example output: M

we will take the user input (as a base 10 number), we will change this to the roman numerals that equate to the value of the input.

example input: 346
example output: CCCXXXXVI

when a number is inputted, the roman numeral output cannot contain more than 3 roman numerals in a row; instead we switch to subtraction, moving those symbols to the left side.

example input: 346
example output: CCCXLVI

example input: 14
example output: XIV

We must seperate ones, tens,hundereds, thousands. 99 is NOT IC, its XCIX.

example input: 299
example output: CCXCIX

you cannot count higher than 3,999 in roman numerals.

example input: 4000
example output: "Not defined, cannot contain 4 symbols in a row (MMMM)"


## Setup/Installation Requirements
Open our file using a Modern Web Browser.


## Support and contact details

[Anthony Bottemiller](mailto:anthonybottemiller@outlook.com)
[Jackson Meyer](mailto:jackson.meyer7@gmail.com)
## Technologies Used

* HTML
* CSS
* BOOTSTRAP
* Javascript
* Jquery

### License

Copyright (c) 2016 Jackson Meyer and Anthony Bottemiller

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
