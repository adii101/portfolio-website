import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: Timestamp;
}

export default function AdminPage() {
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchQuoteRequests = async () => {
      try {
        setLoading(true);
        const q = query(collection(db, "quoteRequests"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        const requests: QuoteRequest[] = [];
        querySnapshot.forEach((doc) => {
          requests.push({ 
            id: doc.id, 
            ...doc.data() 
          } as QuoteRequest);
        });
        
        setQuoteRequests(requests);
      } catch (err) {
        console.error("Error fetching quote requests:", err);
        setError("Failed to load quote requests. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuoteRequests();
  }, []);

  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return "Unknown date";
    return timestamp.toDate().toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Quote Requests Admin</h1>
          <Link href="/">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Website
            </Button>
          </Link>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-700">
            {error}
          </div>
        ) : quoteRequests.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-medium text-gray-700">No quote requests yet</h2>
            <p className="text-gray-500 mt-2">
              When clients submit quote requests through the contact form, they will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {quoteRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{request.name}</h2>
                    <p className="text-gray-500">{request.email}</p>
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                    {request.projectType || "General Inquiry"}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Message:</h3>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded">{request.message}</p>
                </div>
                
                <div className="text-xs text-gray-500 text-right">
                  Submitted on: {formatDate(request.createdAt)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}