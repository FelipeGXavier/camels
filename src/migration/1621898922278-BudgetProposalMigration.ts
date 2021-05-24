import { MigrationInterface, QueryRunner, Table, TableUnique } from 'typeorm';

export class BudgetProposalMigration1621898922278 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'budget_proposal',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'comment',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'average_resolution',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'hired_id',
            type: 'int',
          },
          {
            name: 'budget_order_id',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['hired_id'],
            referencedTableName: 'hired',
            referencedColumnNames: ['id'],
          },
          {
            columnNames: ['budget_order_id'],
            referencedTableName: 'budget_order',
            referencedColumnNames: ['id'],
          },
        ],
      }),
      true,
    );

    await queryRunner.createUniqueConstraint(
      'budget_proposal',
      new TableUnique({
        columnNames: ['hired_id', 'budget_order_id'],
        name: 'unique_budget_proposal',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('budget_proposal');
  }
}
