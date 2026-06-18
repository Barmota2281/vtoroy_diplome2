import UserCard from './modules/user/UserCard';
import PostList from './modules/posts/PostList';

function App() {
  return (
    <div>
      <h1>Модульное приложение</h1>
      <UserCard name="Вася" avatarUrl="https://...jpg" />
      <PostList />
    </div>
  );
}
export default App;