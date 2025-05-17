import ProfileCard from './ProfileCard';
export default function ProfileContainer() {
let profileData = [
    {
        name: "Clark K",
        age: 10000000,
        bio: "This is Clark's bio."
    },
    {
        name: "Peter P",
        age: 48,
        bio: "This is Peter's bio."
    },
    {
        name: "Bruce W",
        age: 31,
        bio: "This is Bruce's bio."
    }
]
//const profile = profileData.map((data, index) => ({ index }, { data }));

return (

    <div>
        <h1>User Profiles</h1>
        {profileData.map((profile,index) => (
           <ProfileCard
             key={index}  
             id ={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
  />
        ))}
    </div>
);

}

