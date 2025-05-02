export default function Upload() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-2xl font-bold mb-4">Upload a Photo</h2>
      <input type="file" className="mb-4" />
      <textarea
        placeholder="Write a caption..."
        className="border p-2 w-full max-w-md mb-4"
        rows={4}
      ></textarea>
      <button className="bg-blue-600 text-white px-6 py-2 rounded">Post</button>
    </div>
  );
}
