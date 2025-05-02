const dummyPosts = [
  {
    id: 1,
    username: "John Doe",
    avatar: "https://i.pravatar.cc/40?img=1",
    time: "2 hours ago",
    content: "Had a great day today! #life #happy",
    image: "https://source.unsplash.com/random/400x300?life",
  },
  {
    id: 2,
    username: "Jane Smith",
    avatar: "https://i.pravatar.cc/40?img=2",
    time: "5 hours ago",
    content: "Exploring new places. #travel #adventure",
    image: "https://source.unsplash.com/random/400x300?travel",
  },
];

export default function Feed() {
  return (
    <div className="p-4 space-y-6">
      {dummyPosts.map((post) => (
        <div key={post.id} className="bg-white shadow rounded-xl overflow-hidden">
          <div className="flex items-center space-x-4 p-4">
            <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">{post.username}</p>
              <p className="text-sm text-gray-500">{post.time}</p>
            </div>
          </div>
          <img src={post.image} alt="post" className="w-full h-auto object-cover" />
          <div className="px-4 py-2">
            <p>{post.content}</p>
            <div className="flex space-x-6 text-blue-600 mt-2">
              <button>❤️ Like</button>
              <button>💬 Comment</button>
              <button>🔁 Share</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
