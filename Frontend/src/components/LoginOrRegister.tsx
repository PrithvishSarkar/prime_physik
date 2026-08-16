import React from "react";

// Lucide Icon Components
import {
  Dumbbell,
  Eye,
  EyeOff,
  ArrowRight,
  Mail,
  Lock,
  User,
} from "lucide-react";

// React Router Component(s)
import { Link, useNavigate } from "react-router";

// ShadCN Components
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Vital Functions
import authSubmitButtonDisabledStatus from "@/lib/authSubmitButtonDisabledStatus";
import authFormSubmitPostApiCall from "@/services/authFormSubmit";

// Redux Toolkit Slices
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setEmail,
  setPassword,
  setPasswordType,
  setConfirmPassword,
  setIsChecked,
} from "@/reduxToolkit/slices/authFormSlice";
import SpinningLoader from "./SpinningLoader";

const LoginOrRegister = ({ pageType }: { pageType: "login" | "register" }) => {
  // Loading state of 'Register' or 'Login' button when clicked to call API
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const isRegister = pageType === "register";

  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.authFormSliceReducer);

  const { name, email, password, passwordType, confirmPassword, isChecked } =
    state;

  const navigate = useNavigate();

  const formStyles = {
    label: "text-sm font-medium mb-2",
    icon: "text-muted-foreground absolute left-2 top-1/2 -translate-y-1/2",
    input:
      "ps-10 pe-4 py-3 w-full bg-transparent border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12d393]",
  };

  return (
    <Card className="max-w-md mx-auto my-12 bg-transparent border-none">
      <CardHeader className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <span className="inline-block p-4 rounded-2xl bg-linear-135 from-[#12d393] to-[#0ea472]">
            <Dumbbell className="w-8 h-8" />
          </span>
        </div>
        <CardTitle className="text-3xl font-bold">
          {isRegister ? "Create Account" : "Welcome Back"}
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-2">
          {isRegister
            ? "Start your fitness transformation today"
            : "Login to continue your fitness journey"}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8 bg-[#14181f] border border-border rounded-2xl shadow-lg">
        <form
          onSubmit={(e) =>
            authFormSubmitPostApiCall(
              e,
              isRegister,
              state.name,
              state.email,
              state.password,
              dispatch,
              navigate,
              setIsLoading
            )
          }
          className="space-y-5"
        >
          {/* Name */}
          {isRegister && (
            <div>
              <Label htmlFor="name" className={formStyles.label}>
                Full Name
              </Label>
              <div className="relative">
                <User className={formStyles.icon} />
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => dispatch(setName(e.target.value))}
                  required
                  className={formStyles.input}
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div>
            <Label htmlFor="email" className={formStyles.label}>
              Email
            </Label>
            <div className="relative">
              <Mail className={formStyles.icon} />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                required
                className={formStyles.input}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" className={formStyles.label}>
              Password
            </Label>
            <div className="relative">
              <Lock className={formStyles.icon} />
              <input
                id="password"
                type={passwordType}
                name="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                placeholder={
                  isRegister ? "Create a password" : "Enter your password"
                }
                required
                className={formStyles.input}
              />
              {passwordType === "password" ? (
                <Eye
                  className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                  onClick={() => dispatch(setPasswordType("text"))}
                />
              ) : (
                <EyeOff
                  className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                  onClick={() => dispatch(setPasswordType("password"))}
                />
              )}
            </div>
          </div>

          {/* Confirm Password */}
          {isRegister && (
            <div>
              <Label htmlFor="confirm-password" className={formStyles.label}>
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className={formStyles.icon} />
                <input
                  id="confirm-password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                  required
                  className={formStyles.input}
                />
              </div>
            </div>
          )}

          {/* Terms and Policy */}
          {isRegister && (
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={isChecked}
                onClick={() => dispatch(setIsChecked())}
                required
              />
              <Label htmlFor="terms" className="text-muted-foreground">
                I agree to the{" "}
                <a href="#" className="text-[#12d393] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#12d393] hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
          )}

          <Button
            type="submit"
            disabled={authSubmitButtonDisabledStatus(
              isRegister,
              password,
              confirmPassword,
              isChecked,
              isLoading
            )}
            className="w-full text-secondary text-lg font-semibold bg-[#12d393] cursor-pointer transition-all hover:bg-[#12d393e6] hover:shadow-[0_0_20px_#12d39366]"
          >
            {isRegister ? "Create Account" : "Login"}
            {isLoading ? <SpinningLoader size={4} color="dark" /> : <ArrowRight />}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="text-muted-foreground text-sm">
        {isRegister ? (
          <p className="w-full text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#12d393] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        ) : (
          <p className="w-full text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#12d393] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default LoginOrRegister;
