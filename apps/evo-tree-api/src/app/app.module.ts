import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { SpeciesModule } from '../app/species/species.module';
import { Species } from './species/species.entity';

@Module({
  imports: [
    SpeciesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'evo-tree',
      synchronize: true,
      entities: [Species],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
