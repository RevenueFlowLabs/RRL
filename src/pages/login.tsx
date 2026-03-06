export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition mb-4">Login with Google</button>
        <p className="text-center text-slate-500 text-sm italic">Connect your account to access the dashboard.</p>
      </div>
    </div>
  )
}