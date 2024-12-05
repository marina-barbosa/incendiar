import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiLogInCircle } from "react-icons/bi";
// import { useAuthStore } from '../../stores/authStore';
import { Button } from "./button";
import { Input } from "./input";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const login = useAuthStore(state => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await login(email, password);
      navigate("/");
    } catch (err) {
      setError(`Invalid credentials: ${err}`);
    }
  };

  return (
    <div 
    style={{ minHeight: 'calc(100vh - 64px)' }}
    className=" bg-black flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-zinc-900 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          Login to Incendiar
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <Button type="submit" fullWidth icon={BiLogInCircle}>
            Login
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <Button variant="social" icon={FcGoogle}>
              Continue with Google
            </Button>
            <Button variant="social" icon={FaFacebook}>
              Continue with Facebook
            </Button>
          </div>
        </div>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-orange-500 hover:text-orange-400"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};
