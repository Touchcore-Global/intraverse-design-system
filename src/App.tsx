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
import TravelLinksPage from "./pages/TravelLinks.tsx";
import TravelAgents from "./pages/TravelAgents.tsx";
import IndependentsAudience from "./pages/IndependentsAudience.tsx";
import WhoWeServe from "./pages/WhoWeServe.tsx";
import BusinessesPage from "./pages/Businesses.tsx";
import CorporatesAudience from "./pages/CorporatesAudience.tsx";
import StartupsAudience from "./pages/StartupsAudience.tsx";
import DevelopersAudience from "./pages/DevelopersAudience.tsx";
import FintechsAudience from "./pages/FintechsAudience.tsx";
import About from "./pages/About.tsx";
import Features from "./pages/Features.tsx";
import UseCases from "./pages/UseCases.tsx";
import Proof from "./pages/Proof.tsx";
import FAQ from "./pages/FAQ.tsx";
import Contact from "./pages/Contact.tsx";
import Login from "./pages/Login.tsx";
import Pricing from "./pages/Pricing.tsx";
import Products from "./pages/Products.tsx";
import NotFound from "./pages/NotFound.tsx";
import ApiProduct from "./pages/ApiProduct.tsx";
import OdiopayProduct from "./pages/OdiopayProduct.tsx";
import ToolsPage from "./pages/Tools.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Product routes - support both old and new paths */}
          <Route path="/products" element={<Products />} />
          <Route path="/agent-platform" element={<AgentPlatform />} />
          <Route path="/products/agent-platform" element={<AgentPlatform />} />
          <Route path="/travx" element={<Travx />} />
          <Route path="/products/travx" element={<Travx />} />
          <Route path="/coopx" element={<CoopX />} />
          <Route path="/products/coopx" element={<CoopX />} />
          <Route path="/independents" element={<Independents />} />
          <Route path="/products/independents" element={<Independents />} />
          <Route path="/supplier-engine" element={<SupplierEngine />} />
          <Route path="/products/supplier-engine" element={<SupplierEngine />} />
          <Route path="/products/travel-links" element={<TravelLinksPage />} />
          <Route path="/products/api" element={<ApiProduct />} />
          <Route path="/products/odiopay" element={<OdiopayProduct />} />
          <Route path="/tools" element={<ToolsPage />} />
          {/* Audience routes */}
          <Route path="/for/travel-agents" element={<TravelAgents />} />
          <Route path="/for/independents" element={<IndependentsAudience />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/for/businesses" element={<BusinessesPage />} />
          <Route path="/for/corporates" element={<CorporatesAudience />} />
          <Route path="/for/startups" element={<StartupsAudience />} />
          <Route path="/for/developers" element={<DevelopersAudience />} />
          <Route path="/for/fintechs" element={<FintechsAudience />} />
          {/* Core pages */}
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
