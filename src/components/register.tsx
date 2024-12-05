import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FaFacebook, FaGithub } from "react-icons/fa";
// import { useAuthStore } from '../../stores/authStore';
import { Button } from "./button";
import { Input } from "./input";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  // const register = useAuthStore(state => state.register);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await register(email, password, name);
      navigate("/");
    } catch (err) {
      setError(`Registration failed. User might already exist: ${err}`);
    }
  };

  return (
    <div 
    style={{ minHeight: 'calc(100vh - 64px)' }}
    className=" bg-black flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          Create Account
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            label="Name"
            icon={FiUser}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <Input
            type="email"
            label="Email"
            icon={FiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <Input
            type="password"
            label="Password"
            icon={FiLock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <Button type="submit" fullWidth>
            Register
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <Button variant="social" icon={FaGithub}>
              Continue with Github
            </Button>
            <Button variant="social" icon={FaFacebook}>
              Continue with Facebook
            </Button>
          </div>
        </div>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-orange-500 hover:text-orange-400"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};
