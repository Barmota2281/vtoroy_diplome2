import UserAvatar from './components/UserAvatar';
import Button from '../common/components/Button';

function UserCard({ name, avatarUrl }) {
  return (
    <div>
      <UserAvatar url={avatarUrl} />
      <h3>{name}</h3>
      <Button>Подписаться</Button>
    </div>
  );
}
export default UserCard;