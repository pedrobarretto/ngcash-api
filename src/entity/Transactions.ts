import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  debitedAccountId: number;

  @Column()
  creditedAccountId: number;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}
