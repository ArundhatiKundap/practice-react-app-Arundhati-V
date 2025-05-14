
    export default function ProfileCard(props) {

        const { index, name, age, bio } = props;

        return (
            <div>
                <ul>
                    <li key={index}>{name} </li>
                    <li key={index}>{age} </li>
                    <li key={index}>{bio} </li>
                </ul>
            </div>
        )
    }