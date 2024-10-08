// Validate the schema using Joi NPM package.


const Joi = require('joi'); // Requireed joi




// Now define a scema with the help of joi
module.exports.listingSchema = Joi.object({ // Means inside Joi always required a object that is supposed to be 'listing'
    listing: Joi.object({ // Acording to joi this listing is always be a object
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(0), // Price should not be negative
        location: Joi.string().required(),
        country: Joi.string().required(),
        image: Joi.string().allow("", null), // Alow the image empty or null because by default mongoose set a default value if empty
    }).required(), // this listing object always be required
});



// Define the review schema for validation with Joi
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required(),
});



