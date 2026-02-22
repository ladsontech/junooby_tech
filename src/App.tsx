
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import Ecommerce from "./pages/Ecommerce";
import Apps from "./pages/Apps";
import Socials from "./pages/Socials";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen md:pb-0 pb-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom))]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/web" element={<Web />} />
            <Route path="/ecommerce" element={<Web />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
