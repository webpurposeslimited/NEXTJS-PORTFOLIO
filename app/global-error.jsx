"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  // Log the error to console in development
  console.error('Global error occurred:', error);

  return (
    <html lang="en">
      <head>
        <title>Something went wrong</title>
      </head>
      <body className="bg-zinc-900 text-white">
        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-6">Please try refreshing the page or contact support if the issue persists.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Refresh page
          </button>
        </div>
      </body>
    </html>
  );
}
