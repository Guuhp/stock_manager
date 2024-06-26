import { Role } from 'src/enums/role.enum';
import { StatusAccount } from 'src/enums/statusAccount.enum';

export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  department: string;
  jobTitle!: string;
  profileImage?: string;
  role: Role;
  statusAccount: StatusAccount;
  created_at?: string;
  updated_at?: string;
}
