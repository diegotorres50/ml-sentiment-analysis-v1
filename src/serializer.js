/*
First of all, we need to convert our input to a numeric value.
Let’s take a look at the following functions:

We’re gonna pass to our Neural Network a lot of strings with different lengths.
Brain.js doesn’t like that (it will output NaN as result, wtf lol),
so we need to serialize our data and make all the arrays with equal length.
*/
const fixLengths = (data) => {

  let maxLengthInput = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].input.length > maxLengthInput) {
      maxLengthInput = data[i].input.length;
    }
  }

  for (let i = 0; i < data.length; i++) {
    while (data[i].input.length < maxLengthInput) {
      data[i].input.push(0);
    }
  }

  return data;
}

const encode = d => {
  const newArr = [];
  d.split('').map(c => {
    newArr.push((c.charCodeAt(0) / 255))
  })
  return newArr
}

const encodeData = data => {

  return data.map( d => {

    return {
        input:  encode(d.input),
        output: d.output
      }
  })
}

// Now guess what do we need to do? We need to encode and serialize our data!

const serialize = data => fixLengths(encodeData(data))

/*
As you can see, we’re gonna export two functions.
The first one will serialize our data, the second one is just encoding it.
We’ll use the last one when we’ll need to encode our input string.
*/
module.exports = {
  serialize:  serialize,
  encode:     encode,
  fixLengths: fixLengths
}
