/**
 * @swagger
 * tags:
 *   name: DetailTable
 *   description: API operations for managing detail tables
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DetailTable:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the detail table.
 *         detailTableName:
 *           type: string
 *           description: The name of the detail table.
 *         masterTableId:
 *           type: string
 *           description: The ID of the associated master table.
 *         detailTableAccessLevel:
 *           type: number
 *           description: Access level associated with the detail table.
 *         detailTableDescription:
 *           type: string
 *           description: Description of the detail table.
 *       required:
 *         - detailTableName
 *         - masterTableId
 */


