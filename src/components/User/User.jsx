import './User.css'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {name,website,id} = user;
    const navigate = useNavigate();

    const clickMe = ()=>{

        navigate(`/User/${id}`);
    }
    return (
        <div className='cart'>
            <h2>Name: {name}</h2>
            <h3>website: {website}</h3>
            <button onClick={clickMe}>Click me</button>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object,
};

export default User;