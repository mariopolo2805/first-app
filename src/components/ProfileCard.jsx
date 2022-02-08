import React from 'react';

const ProfileCard = (props) => {
  return (
    <>
      {props.profiles.map((profile) => {
        return (
          <div key={JSON.stringify(profile)}>
            <h3>
              {profile.name} {profile.address}
            </h3>
            <p>Ciudad: {profile.location}</p>
            <img src={profile.image} alt="" width="200" />
          </div>
        );
      })}
    </>
  );
}

export default ProfileCard;