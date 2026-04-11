import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AgentPlatform from "./pages/AgentPlatform.tsx";
import Travx from "./pages/Travx.tsx";
import CoopX from "./pages/CoopX.tsx";
import Independents from "./pages/Independents.tsx";
import SupplierEngine from "./pages/SupplierEngine.tsx";
import TravelAgents from "./pages/TravelAgents.tsx";
import IndependentsAudience from "./pages/IndependentsAudience.tsx";
import About from "./pages/About.tsx";
import Features from "./pages/Features.tsx";
import Proof from "./pages/Proof.tsx";
import FAQ from "./pages/FAQ.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agent-platform" element={<AgentPlatform />} />
          <Route path="/travx" element={<Travx />} />
          <Route path="/coopx" element={<CoopX />} />
          <Route path="/independents" element={<Independents />} />
          <Route path="/supplier-engine" element={<SupplierEngine />} />
          <Route path="/for/travel-agents" element={<TravelAgents />} />
          <Route path="/for/independents" element={<IndependentsAudience />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
