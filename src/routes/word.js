const express = require('express');
const Router = express.Router();

const WordModel = require('../models/word');

Router.post('/', async (request, response) => {
    const { word } = request.body;

    const wordModel = new WordModel({ 
        name: word
    });

    try {

        await wordModel.save();

        return response.status(200).json({
            "msg": word
        });

    } catch (error) {
        return response.status(500).json({
            "error": error.message
        });
    }
});

Router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updatedWord = req.body;

  try {
    const word = await WordModel.findByIdAndUpdate(id, { name: updatedWord.word }, { new: true });

    if (!word) {
      res.status(404).json({
        'msg': 'Word not found.'
      });
    } else {
      res.json({
        'msg': 'Word updated successfully.'
      });
    }
  } catch (error) {
    res.status(500).json({
      'msg': 'Failed to update word.'
    });
  }
});

Router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedWord = await WordModel.findByIdAndDelete(id);

    if (!deletedWord) {
      res.status(404).json({
        'msg': 'Word not found.'
      });
    } else {
      res.json({
        'msg': 'Word deleted successfully.'
      });
    }
  } catch (error) {
    res.status(500).json({
      'msg': 'Failed to delete word.'
    });
  }
});

module.exports = Router;