import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class HirerAddSegmentFK1621890851001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'hirer',
      new TableColumn({
        name: 'segment_id',
        type: 'int',
      }),
    );

    await queryRunner.createForeignKey(
      'hirer',
      new TableForeignKey({
        columnNames: ['segment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'segment',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('hirer');
    if (table) {
      const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('segment_id') !== -1);
      if (foreignKey) {
        await queryRunner.dropForeignKey('segment_id', foreignKey);
        await queryRunner.dropColumn('hirer', 'segment_id');
      }
    }
  }
}
