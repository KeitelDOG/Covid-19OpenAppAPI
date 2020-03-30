const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../api-docs/main-api-doc.json');

const SwaggerController = require('../../controllers/Swagger');
const swagger = new SwaggerController();

// SWAGGER DOCUMENTATION --
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/api-docs/generate', swagger.generate.bind(swagger));

module.exports = router;
