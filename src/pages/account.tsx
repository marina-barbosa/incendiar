import { useState } from "react";
// import { useAuthStore } from '../store/authStore';
import Button from "../components/my-button";
import CustomButton from "../components/customButton";
import { FcGoogle } from "react-icons/fc";
import { BiLogInCircle } from "react-icons/bi";

const Account = () => {
  // const { user, signIn, signUp, signOut, error } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      // await signUp(email, password);
    } else {
      // await signIn(email, password);
    }
  };

  // if (user) {
  //   return (
  //     <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
  //       <div className="bg-zinc-900 p-8 rounded-lg max-w-md mx-auto">
  //         <h2 className="text-2xl font-bold text-white mb-4">My Account</h2>
  //         <p className="text-gray-400 mb-4">Signed in as: {user.email}</p>
  //         <Button onClick={() => signOut()} variant="secondary" className="w-full">
  //           Sign Out
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-zinc-900 p-8 rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">
          {isSignUp ? "Create Account" : "Sign In"}
        </h2>
        {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md bg-zinc-800 border-zinc-700 text-white"
              required
            />
          </div>
          <CustomButton startIcon={<FcGoogle size={20} />}>
            Entre com Google
          </CustomButton>
          <Button type="submit" className="w-full flex gap-2 ">
            <BiLogInCircle size={20} />
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-orange-500 hover:text-orange-400"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Account;
