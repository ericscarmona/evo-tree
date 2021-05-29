import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Species {
  @PrimaryColumn({ unique: true })
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  parentId: string;

  @Column({ nullable: true, type: 'simple-json' })
  children: Species[];
}
