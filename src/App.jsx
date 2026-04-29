import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound";
import { Toaster } from "react-hot-toast";
import PageLoader from "@/components/PageLoader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleEnd = () => setLoading(false);
    window.addEventListener("navigation:start", handleStart);
    window.addEventListener("navigation:end", handleEnd);
    return () => {
      window.removeEventListener("navigation:start", handleStart);
      window.removeEventListener("navigation:end", handleEnd);
    };
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
