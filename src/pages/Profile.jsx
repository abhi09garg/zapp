const userPosts = [
  {
    id: 1,
    content: "My first post!",
    image: "https://source.unsplash.com/random/400x300?selfie",
  },
  {
    id: 2,
    content: "Loving this platform",
    image: "https://source.unsplash.com/random/400x300?fun",
  },
];

export default function Profile() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Posts</h2>
      <div className="space-y-4">
        {userPosts.map((post) => (
          <div key={post.id} className="bg-white shadow rounded-xl p-4">
            <img src={post.image} alt="user post" className="rounded-md w-full mb-2" />
            <p>{post.content}</p>
            <div className="flex justify-end space-x-4 mt-2 text-blue-600">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
