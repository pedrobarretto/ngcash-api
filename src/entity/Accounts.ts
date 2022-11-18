import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountsModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 100 })
  balance: number;
}
