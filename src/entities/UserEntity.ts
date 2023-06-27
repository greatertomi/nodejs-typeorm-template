import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  age: number;

  @Column({unique: true})
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: 'student' })
  role: string;

  @Column({ nullable: true })
  isGeneratedPassword: boolean;

  @Column({nullable: true})
  country: string;

  @CreateDateColumn()
  createdAt: Date;
}
