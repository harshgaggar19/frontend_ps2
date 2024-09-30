import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { FloatingDockDesktop } from "../components/FloatingDock";
import {
  IconBrandSuperhuman,
  IconContract,
  IconHome,
  IconStepOut,
} from "@tabler/icons-react";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="absolute z-20 bottom-0 left-[50%] -translate-x-[50%] p-7 ">
        {/* // <FloatingDockDesktop />/ */}
        <FloatingDockDesktop
          items={[
            { href: "/about", icon: <IconHome />, title: "Home" },
            { href: "/about", icon: <IconContract />, title: "Home" },
            { href: "/about", icon: <IconBrandSuperhuman />, title: "Home" },
            { href: "/about", icon: <IconStepOut />, title: "Home" },
          ]}
        />
      </div>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  );
}
