import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/home/Index";

const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const NotFound = lazy(() => import("./pages/not-found/Index"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F7F4F0" }}>
    <div style={{ fontFamily: "Lato, sans-serif", fontSize: 16, color: "#7259A3", fontWeight: 700 }}>
      Cargando Bedtime Journey… 🌙
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MemoryRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
