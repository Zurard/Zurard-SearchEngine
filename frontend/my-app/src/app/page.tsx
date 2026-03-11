export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="flex justify-center mb-12">
        <h1 className="text-5xl font-bold text-indigo-600">Zurard Engine</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex gap-2 w-full max-w-md">
          <input 
            type="text" 
            placeholder="Search..." 
            className="flex-1 text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
