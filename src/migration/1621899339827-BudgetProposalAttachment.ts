import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class BudgetProposalAttachment1621899339827 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'budget_proposal_attachment',
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
            name: 'budget_proposal_id',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['budget_proposal_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'budget_proposal',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('budget_proposal_attachment');
  }
}
