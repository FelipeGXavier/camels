import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CompanyPermissionMigration1621897979544 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company_permission',
        columns: [
          {
            name: 'company_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'permission_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'created_at',
            type: 'date',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['company_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'company',
          },
          {
            columnNames: ['permission_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'permission',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company_permission');
  }
}
