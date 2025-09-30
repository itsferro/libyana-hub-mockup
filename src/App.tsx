import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CoachProfile from "./pages/fitness/CoachProfile";
import ClientDashboard from "./pages/fitness/ClientDashboard";
import WorkoutInterface from "./pages/fitness/WorkoutInterface";
import ProgressTracking from "./pages/fitness/ProgressTracking";
import CoachManagement from "./pages/fitness/CoachManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fitness/coach-profile" element={<CoachProfile />} />
          <Route path="/fitness/client-dashboard" element={<ClientDashboard />} />
          <Route path="/fitness/workout" element={<WorkoutInterface />} />
          <Route path="/fitness/progress" element={<ProgressTracking />} />
          <Route path="/fitness/coach-management" element={<CoachManagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
