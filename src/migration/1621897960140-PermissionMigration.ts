import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class PermissionMigration1621897960140 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'permission',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'actor',
            type: 'varchar(100)',
          },
          {
            name: 'tier',
            type: 'varchar(50)',
          },
          {
            name: 'code',
            type: 'int',
          },
          {
            name: 'kind',
            type: 'text',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('permission');
  }
}
