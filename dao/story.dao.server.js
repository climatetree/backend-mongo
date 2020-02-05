const storyModel = require('../models/story.model.server')

findAllStories = () => storyModel.find();

findStoryByStoryID = storyID => storyModel.find({story_id: storyID});

findStoryByPlaceID = placeID => storyModel.find({place_ids:{$all:[placeID]}});

createStory = story => storyModel.create(story);

module.exports = {
    findAllStories,
    findStoryByStoryID,
    findStoryByPlaceID,
    createStory
}