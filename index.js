const brain      = require('brain.js')
const trainData  = require('./src/training-data')
const serializer = require('./src/serializer')
const net        = new brain.NeuralNetwork()

// Now we need to train our data!

/*
As you can se, we’re passing a second argument to the train() method:{log: true}
this will allow us to see the full log in our terminal.
*/

// net.train(serializer.serialize(trainData))
net.train(serializer.serialize(trainData), {log: true})

/*
Of course, our train error is a bit high,
that’s because we’ve got a really poor dataset for training.
Larger datasets will produce better results!
*/

const output = net.run(serializer.encode('no me siento a salvo'))

/*
Now we just need to test our trained Neural Network.
*/

console.log(output)
