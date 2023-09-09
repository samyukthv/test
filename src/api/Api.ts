import { randomuser } from "../axios/axios";
import User from "../model/UserInterface";


  
  export const fetchUsers = async (): Promise<User[]> => {
    try {
      const { data } = await randomuser.get("api/?results=50");
      const users: User[] = data.results;
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };