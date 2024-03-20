import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Users {users.length}</h1>
            <div className="users-cart">
            {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;