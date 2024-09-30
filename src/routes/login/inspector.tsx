import { createFileRoute } from "@tanstack/react-router";
import { SignupFormDemo } from "../../components/SignUp";

export const Route = createFileRoute("/login/inspector")({
  component: InspectorLogin,
});

function InspectorLogin() {
  return <SignupFormDemo />;
}
