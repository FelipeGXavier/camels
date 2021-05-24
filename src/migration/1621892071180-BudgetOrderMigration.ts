import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class BudgetOrderMigration1621892071180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'budget_order',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar(50)',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'duration',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'initial_price',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'initial_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'hirer_id',
            type: 'int',
          },
          {
            name: 'hired_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'active',
            type: 'boolean',
            default: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'budget_order',
      new TableForeignKey({
        columnNames: ['hirer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'hirer',
      }),
    );

    await queryRunner.createForeignKey(
      'budget_order',
      new TableForeignKey({
        columnNames: ['hired_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'hired',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('budget_order');
  }
}
