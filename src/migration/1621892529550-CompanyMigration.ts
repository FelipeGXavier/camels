import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CompanyMigration1621892529550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'fantasy_name',
            type: 'text',
          },
          {
            name: 'responsible_name',
            type: 'varchar(150)',
          },
          {
            name: 'cnpj',
            type: 'varchar(14)',
            isUnique: true,
          },
          {
            name: 'mobile',
            type: 'varchar(20)',
          },
          {
            name: 'email',
            type: 'varchar(100)',
          },
          {
            name: 'description',
            type: 'varchar(500)',
            isNullable: true,
          },
          {
            name: 'company_type',
            type: 'int',
          },
          {
            name: 'uf',
            type: 'varchar(2)',
          },
          {
            name: 'city',
            type: 'varchar(50)',
          },
          {
            name: 'related_links',
            type: 'text',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company');
  }
}
