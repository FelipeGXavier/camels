import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class HirerMigration1621890241102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hirer',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'login',
            type: 'varchar(30)',
          },
          {
            name: 'password',
            type: 'varchar(20)',
          },
          {
            name: 'company_id',
            type: 'int',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('hirer');
  }
}
