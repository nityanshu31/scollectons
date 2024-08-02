const express = require('express');
const cors = require('cors');
require('./db/config'); // Assuming this file contains your MongoDB connection setup
const User = require('./db/User'); // Correct path to your user model
const app = express();
const Product = require('./db/Product');

app.use(express.json());
app.use(cors());

app.post('/register', async (req, resp) => {
  try {
      console.log('Request body:', req.body);
      const { name, email, password, confirmPassword, isAdmin } = req.body;

      if (password !== confirmPassword) {
          return resp.status(400).send({ message: 'Passwords do not match' });
      }

      let user = new User({ name, email, password, isAdmin: isAdmin || false });
      let result = await user.save();
      console.log('User saved:', result);
      resp.status(201).send(result);
  } catch (error) {
      console.error('Error saving user:', error);
      resp.status(500).send({ message: 'Error registering user', error: error.message });
  }
});


app.post('/login', async (req, resp) => {
  try {
      console.log('Request body:', req.body);

      const { email, password } = req.body;
      if (!email || !password) {
          return resp.status(400).send({ result: 'Email and password are required' });
      }

      let user = await User.findOne({ email, password });

      if (user) {
          resp.send(user);
      } else {
          resp.status(404).send({ result: 'No User Found' });
      }
  } catch (error) {
      console.error('Error in login:', error);
      resp.status(500).send({ result: 'Server Error', error: error.message });
  }
});


app.get('/users', async (req, resp) => {
  try {
      const users = await User.find();
      resp.send(users);
  } catch (error) {
      console.error('Error fetching users:', error);
      resp.status(500).send({ message: 'Error fetching users', error: error.message });
  }
});

// Update user role
app.put('/update-role/:id', async (req, resp) => {
  try {
      const { isAdmin } = req.body;
      const user = await User.findByIdAndUpdate(req.params.id, { isAdmin }, { new: true });
      
      if (!user) {
          return resp.status(404).send({ message: 'User not found' });
      }

      resp.send(user);
  } catch (error) {
      console.error('Error updating user role:', error);
      resp.status(500).send({ message: 'Error updating user role', error: error.message });
  }
});



// Add a new product
app.post('/add-product', async (req, res) => {
  try {
    const { image, title, price, description } = req.body;
    
    if (!image || !title || !price || !description) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    
    const newProduct = new Product({ image, title, price, description });
    const savedProduct = await newProduct.save();
    
    res.status(201).send(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send({ message: 'Error adding product', error: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
