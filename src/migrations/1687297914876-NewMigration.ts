import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1687297914876 implements MigrationInterface {
    name = 'NewMigration1687297914876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "programmes" ADD "programmeCode" character varying NOT NULL DEFAULT 'N/A'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" character varying NOT NULL DEFAULT 'student'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "programmes" DROP COLUMN "programmeCode"`);
    }

}
