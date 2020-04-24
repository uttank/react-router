import React from 'react';

const data = {
  velopert: {
    name: '김민준',
    description: 'developer',
  },
  gildong: {
    name: '홍길동',
    description: '의적',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
