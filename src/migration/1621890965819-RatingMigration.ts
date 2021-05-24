import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableUnique } from 'typeorm';

export class RatingMigration1621890965819 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rating',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'hirer_id',
            type: 'int',
          },
          {
            name: 'hired_id',
            type: 'int',
          },
          {
            name: 'comment',
            type: 'varchar(500)',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'rating',
      new TableForeignKey({
        columnNames: ['hirer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'hirer',
      }),
    );

    await queryRunner.createForeignKey(
      'rating',
      new TableForeignKey({
        columnNames: ['hired_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'hired',
      }),
    );

    await queryRunner.createUniqueConstraint(
      'rating',
      new TableUnique({
        columnNames: ['hired_id', 'hirer_id'],
        name: 'unique_rating',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rating');
  }
}
