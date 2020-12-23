const express = require('express')
const controller_tours = require(`${__dirname}/../contellers/cotroller_tours`);

const tourRouter = express.Router();


tourRouter.param('id', controller_tours.check_id);


tourRouter.route('/')
    .get(controller_tours.get_all_tours)
    .post(controller_tours.create_new_tour);



tourRouter.route('/:id')
    .get(controller_tours.get_tour_by_id)
    .patch(controller_tours.update_tour_by_id)
    .delete(controller_tours.delete_tour_by_id);


module.exports = tourRouter;    