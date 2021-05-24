import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class BudgetOrderAttachment1621898525978 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'budget_order_attachment',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'path',
            type: 'text',
          },
          {
            name: 'budget_order_id',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['budget_order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'budget_order',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('budget_order_attachment');
  }
}
