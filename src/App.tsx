
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { AdminProvider } from "@/contexts/AdminContext";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import Ecommerce from "./pages/Ecommerce";
import Apps from "./pages/Apps";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AdminProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen md:pb-0 pb-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom))]">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/web" element={<Web />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <BottomNav />
        </BrowserRouter>
      </AdminProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
