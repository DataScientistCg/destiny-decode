import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold"
          >Try again</button>
          <a href="/" className="btn-outline-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Destiny Decode — Decode Your Destiny with Numerology" },
      { name: "description", content: "Premium numerology by Sudhanshuu Bharti. Personalized reports, name correction, business & career guidance. Apply now." },
      { name: "author", content: "Destiny Decode" },
      { property: "og:title", content: "Destiny Decode — Decode Your Destiny with Numerology" },
      { property: "og:description", content: "Premium numerology by Sudhanshuu Bharti. Personalized reports, name correction, business & career guidance. Apply now." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Destiny Decode" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Destiny Decode — Decode Your Destiny with Numerology" },
      { name: "twitter:description", content: "Premium numerology by Sudhanshuu Bharti. Personalized reports, name correction, business & career guidance. Apply now." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/1BPmJxZb0KhYEP4gB61dsLFEoH23/social-images/social-1784610956756-web_logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/1BPmJxZb0KhYEP4gB61dsLFEoH23/social-images/social-1784610956756-web_logo.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
