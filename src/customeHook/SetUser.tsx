import React from "react";
import {useEffect,useState} from "react" 
import {fetchUsers} from '../api/Api'
import User from "../model/UserInterface";


const setUser = (): [User[], React.Dispatch<React.SetStateAction<User[]>>] => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchData = async () => {
        const data  : User[] = await fetchUsers();
        setUsers(data);
      };

    useEffect(() => {
      fetchData();
    }, []);
  
    return [users, setUsers];
  };
  
  export default setUser;