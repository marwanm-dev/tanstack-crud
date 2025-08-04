import PostView from "./features/posts/components/PostView";

const App = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Posts CRUD App</h1>
      <PostView />
    </div>
  );
};

export default App;
