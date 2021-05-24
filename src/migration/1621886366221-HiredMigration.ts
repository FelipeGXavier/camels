import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ContratanteMigration1621886366221 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hired',
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
            name: 'name',
            type: 'varchar(150)',
          },
          {
            name: 'cpf',
            type: 'varchar(11)',
            isUnique: true,
          },
          {
            name: 'occupation',
            type: 'varchar(50)',
          },
          {
            name: 'description',
            type: 'varchar(500)',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar(100)',
          },
          {
            name: 'mobile',
            type: 'varchar(20)',
            isNullable: true,
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
          {
            name: 'curriculum_attachment',
            type: 'varchar(200)',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('hired');
  }
}
