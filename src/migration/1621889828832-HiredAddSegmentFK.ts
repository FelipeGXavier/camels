import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class HiredAddSegmentFK1621889828832 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'hired',
      new TableColumn({
        name: 'segment_id',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'hired',
      new TableForeignKey({
        columnNames: ['segment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'segment',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('hired');
    if (table) {
      const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('segment_id') !== -1);
      if (foreignKey) {
        await queryRunner.dropForeignKey('segment_id', foreignKey);
        await queryRunner.dropColumn('hired', 'segment_id');
      }
    }
  }
}
