import React, { useState, useEffect } from "react";
import { User, Mail, Lock, Building2, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function AuthPage({ onAuthSuccess }) {
  const navigate = useNavigate();
  // State for user role: 'passenger' or 'restaurant'
  const [role, setRole] = useState("passenger");
  // State to toggle between login and signup modes
  const [isLogin, setIsLogin] = useState(true);
  // States for form input fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  // State for displaying messages (success/error) to the user
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null); // 'success' or 'error'

  // useEffect to clear messages after a few seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType(null);
      }, 5000); // Clear message after 5 seconds
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [message]);

  // Function to set a message for the user
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
  };

  // Toggles the user role (passenger/restaurant)
  const toggleRole = (newRole) => {
    setRole(newRole);
    // Reset form fields and message when role changes
    setFullName("");
    setEmail("");
    setPassword("");
    setRestaurantName("");
    setMessage(null);
    setMessageType(null);
  };

  // Toggles between login and signup modes
  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Reset form fields and message when mode changes
    setFullName("");
    setEmail("");
    setPassword("");
    setRestaurantName("");
    setMessage(null);
    setMessageType(null);
  };

  // Handles the form submission for both login and signup
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare user data based on role and mode
    const userData = {
      role,
      email,
      password, // In a real app, passwords should be hashed server-side
      ...(role === "restaurant" && !isLogin && { restaurantName }),
      ...(!isLogin && { fullName }),
    };

    // Retrieve existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!isLogin) {
      // --- Signup Logic ---
      // Check if a user with the same email and role already exists
      const userExists = users.find(
        (u) => u.email === email && u.role === role
      );

      if (userExists) {
        // If user exists, show error
        showMessage("User with this email and role already exists!", "error");
        return;
      }

      // Add new user data to the array
      users.push(userData);
      // Save the updated users array to localStorage
      localStorage.setItem("users", JSON.stringify(users));
      // Set the current logged-in user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(userData));
      showMessage("Signup successful! Redirecting...", "success");
      onAuthSuccess(role, userData);

    } else {
      // --- Login Logic ---
      // Find the user by email, password, and role
      const userFound = users.find(
        (u) => u.email === email && u.password === password && u.role === role
      );

      if (userFound) {
        // If user found, set them as the current logged-in user in localStorage
        localStorage.setItem("currentUser", JSON.stringify(userFound));
        alert(`Welcome to BusBite as ${role}`);
        onAuthSuccess(role, userFound);
        navigate(`/${role}`);
      } else {
        // If no user found, show error
        showMessage("User not found or wrong credentials!", "error");
        return;
      }
    }

    // Clear form fields after submission attempt
    setFullName("");
    setEmail("");
    setPassword("");
    setRestaurantName("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 font-inter p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p className="text-center text-gray-600 text-base mb-6">
          {role === "passenger" ? "Passenger Mode" : "Restaurant Mode"}
        </p>

        {/* Message Display Area */}
        {message && (
          <div className={`p-3 rounded-xl mb-4 flex items-center space-x-2 ${
            messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {messageType === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}

        {/* Role Selection Buttons */}
        <div className="bg-gray-100 p-1 rounded-full flex mb-6 shadow-inner">
          <button
            type="button"
            onClick={() => toggleRole("passenger")}
            className={`cursor-pointer flex-1 py-2 rounded-full text-sm font-bold transition-all focus:ring-indigo-500 ${
              role === "passenger"
                ? "bg-white text-indigo-700 shadow"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Passenger
          </button>
          <button
            type="button"
            onClick={() => toggleRole("restaurant")}
            className={`cursor-pointer flex-1 py-2 rounded-full text-sm font-bold transition-all focus:ring-indigo-500 ${
              role === "restaurant"
                ? "bg-white text-purple-700 shadow"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Restaurant
          </button>
        </div>

        {/* Authentication Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="relative">
              <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-indigo-400 transition-all duration-200"
              />
            </div>
          )}
          <div className="relative">
            <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-indigo-400 transition-all duration-200"
            />
          </div>
          <div className="relative">
            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-indigo-400 transition-all duration-200"
            />
          </div>

          {!isLogin && role === "restaurant" && (
            <div className="relative">
              <Building2 size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Restaurant Name"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-purple-400 transition-all duration-200"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-indigo-500 hover:bg-indigo-900 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Login/Signup Mode */}
        <p className="text-center mt-6 text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleMode}
            className="cursor-pointer text-indigo-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-md px-1 py-0.5"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
}
