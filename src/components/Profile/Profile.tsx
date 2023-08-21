import { profileData } from '@Types';

export default function Profile({ userName }: profileData) {
  return (
    <div className="profile">
      <div className="profile__avatar" />
      <p className="profile__name">{userName ?? ' '}</p>
    </div>
  );
}
