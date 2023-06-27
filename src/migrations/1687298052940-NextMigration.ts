import { MigrationInterface, QueryRunner } from "typeorm";

export class NextMigration1687298052940 implements MigrationInterface {
    name = 'NextMigration1687298052940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "programmes" ADD "programmeDescription" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "programmes" DROP COLUMN "programmeDescription"`);
    }

}
