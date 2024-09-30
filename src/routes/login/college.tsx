import { createFileRoute, Link } from "@tanstack/react-router";
// import { SignupFormDemo } from "../../components/SignUp";
import { SignupFormDemoC } from "../../components/SignUpC";

export const Route = createFileRoute("/login/college")({
  component: CollegeLogin,
});

function CollegeLogin() {
  return <SignupFormDemoC />;
}
