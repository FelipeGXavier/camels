import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class SegmentMigration1621889629067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'segment',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'int',
          },
          {
            name: 'target',
            type: 'varchar(100)',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('segment');
  }
}
