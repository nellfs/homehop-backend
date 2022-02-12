const { v4: uuidv4 } = require("uuid");
const id = uuidv4();

const HttpError = require("../models/http-error");

let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Casinha",
    description: "Casinha bonitinha",
    location: {
      lat: 40.323231,
      lgn: 20.313234,
    },
    address: "Rua 30 de fevereiro",
    creator: "u1",
  },
];

function getPlaceById(req, res, next) {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id == placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json({ place });
}

function getPlacesByUserId(req, res, next) {
  const userId = req.params.uid;

  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });

  if (!places || place.length === 0) {
    return next(
      new HttpError("Could not find places for the provided user id.", 404)
    );
  }

  res.json({ places });
}

function createPlace(req, res, next) {
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    address,
    location: coordinates,
    creator,
  };

  DUMMY_PLACES.push(createPlace);

  res.status(201).json({ place: createdPlace });
}

function updatePlaceById(req, res, next) {
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatePlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  updatePlace.title = title;
  updatePlace.description = description;

  DUMMY_PLACES[placeIndex] = updatePlace;

  res.status(200).json({ place: updatePlace });
}

function deletePlace(req, res, next) {
  const placeId = req.params.pid;
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Deleted place." });
}

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlace = deletePlace;
