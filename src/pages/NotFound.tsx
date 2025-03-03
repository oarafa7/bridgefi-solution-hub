
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white px-6">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-semibold text-slate-400">404</span>
        </div>
        <h1 className="text-3xl font-semibold mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8">
          We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps never existed.
        </p>
        <Button asChild className="rounded-full">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
