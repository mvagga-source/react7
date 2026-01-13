import axios from "axios";
import React,{useState, useEffect} from "react";
import Spinner from "../compents/Spinner";


const UserList = () => {

    const [users,setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log('Json : ',res.data);
            setUsers(res.data);
            setLoading(false);
        })
    },[]);

    const delBtn =(email)=>{
        alert(email);
        if (window.confirm(`${email} 회원을 삭제 하시겠습니까?`)){
            
        }
    }

    const user_list = users.map((user)=>{
        return(
            <div className="card" key={user.id}>
                <h5 className="card-header">
                    아이디 : {user.id}
                </h5>
                <div className="card-body">
                    <h5 className="card-title">이름 : {user.name}</h5>
                    <p className="card-text">주소 : {user.email}</p>
                    <button href="#" className="btn btn-primary">수정</button>
                    <button onClick={()=>{delBtn(user.email)}} href="#" className="btn btn-primary">삭제</button>
                </div>
            </div>
        )
    })

    return(
        <div className="root">
            <h2>회원 리스트</h2>
            {loading?<Spinner/>:user_list}
        </div>

    )
}

export default UserList;