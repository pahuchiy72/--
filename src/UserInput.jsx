import { useState } from "react";

function UserInput () {
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');

    function handleChange(event) {
        const {field, value} = event.target;

        switch (field) {
            case 'name':
                setName(value);
                break;
                case 'email':
                    setEmail(value);
                    break;
                    default:
                        break;
        }
    }
    return(
        <div>
            <h1> Приклад форми</h1>
        </div>
    )
}
export default UserInput;