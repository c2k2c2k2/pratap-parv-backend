/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CasteCategoriesController from '#controllers/caste_categories_controller';
import ExtraInfosController from '#controllers/extra_infos_controller';
import PartiesController from '#controllers/parties_controller';
import SearchController from '#controllers/search_controller';
import VehiclesController from '#controllers/vehicles_controller';
import VotersController from '#controllers/voters_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource("/caste-categories", CasteCategoriesController);
router.resource("/vehicles", VehiclesController);
router.resource("/voters", VotersController);
router.resource("/parties", PartiesController)
router.resource("/extra-infos", ExtraInfosController)

//search routes
router.get("/search", [SearchController, "search"]);
router.post("/advance-search", [SearchController, "advaceSerarch"]);
