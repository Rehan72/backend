const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getAllUsers = async () => {
  return await User.find();
};

const createUser = async (userData) => {
  if (!userData.name || !userData.email || !userData.phoneNumber || !userData.password || !userData.confirmPassword) {
    throw new Error('Name, email, phone number, password, and confirm password are required');
  }
  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    throw new Error('Invalid email format');
  }
  if (userData.password !== userData.confirmPassword) {
    throw new Error('Passwords do not match');
  }
  if (userData.password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  // Basic phone number validation (adjust as needed)
  if (!/^\d{10}$/.test(userData.phoneNumber)) {
    throw new Error('Phone number must be 10 digits');
  }
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = new User({ ...userData, password: hashedPassword });
    return await user.save();
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('Email already exists');
    }
    if (error.name === 'ValidationError') {
      throw new Error(Object.values(error.errors).map(err => err.message).join(', '));
    }
    throw error;
  }
};

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;
  return user;
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, userData) => {
  try {
    return await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('Email already exists');
    }
    if (error.name === 'ValidationError') {
      throw new Error(Object.values(error.errors).map(err => err.message).join(', '));
    }
    throw error;
  }
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  authenticateUser,
};