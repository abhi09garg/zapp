export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-2xl font-bold mb-4">Create an account</h2>
      <input className="border p-2 mb-2 w-full max-w-md" placeholder="Username" />
      <input className="border p-2 mb-2 w-full max-w-md" placeholder="Email" />
      <input className="border p-2 mb-4 w-full max-w-md" type="password" placeholder="Password" />
      <button className="bg-blue-600 text-white px-6 py-2 rounded">Sign Up</button>
    </div>
  );
}
