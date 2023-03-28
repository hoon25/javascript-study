import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost', 
    port: 5432,
    username: 'test',
    password: 'test12',
    database: 'boardproject',
    //Entities to be loaded for this connection
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    
    synchronize: true
}