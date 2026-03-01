import { UserDao } from "../dao/userDao";
import { User } from "../models/User";

export class AuthService {
    private userDao = new UserDao();

    login(username: string, password: string): User | null {
        const user = this.userDao.findByUsername(username);
        if (!user || user.password !== password) {
            return null;
        }
        return user;
    }
}