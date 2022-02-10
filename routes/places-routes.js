const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
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

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id == placeId;
  });
  res.json({ place });
});

module.exports = router;
