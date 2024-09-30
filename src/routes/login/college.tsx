import { createFileRoute, Link } from "@tanstack/react-router";
import { SignupFormDemo } from "../../components/SignUp";

export const Route = createFileRoute("/login/college")({
  component: CollegeLogin,
});

function CollegeLogin() {
  return <SignupFormDemo />;
}
