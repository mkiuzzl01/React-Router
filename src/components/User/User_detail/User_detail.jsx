import { useLoaderData, useNavigate } from "react-router-dom";
import './User_detail.css'

const User_detail = () => {
    const user = useLoaderData();
    const {website,phone,email,id,name} = user;
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1);
    }
    return (
        <div className="cart">
            <h3>{id}</h3>
            <h2>{name}</h2>
            <h4>{phone}</h4>
            <h5>{website}</h5>
            <p>{email}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default User_detail;