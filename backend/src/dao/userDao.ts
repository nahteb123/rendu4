import { users } from "../database/database";
import { User } from "../models/User";

export class UserDao {
    findByUsername(username: string): User | undefined {
        return users.find(u => u.username === username);
    }

    save(user: User): void {
        users.push(user);
    }
}