import mongoose, { model } from "mongoose";
// extract the schema from that mongoose object
const Schema = mongoose.Schema;
// create a new post schema
const releaseRadarSchema = new Schema({
  artist: {
    type: String,
    required: true,
  },
  trackName: {
    type: String,
    required: true,
  },
  trackSpotifyID: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
  markedAsRemoved: {
    type: String,
    required: false,
  },
  album: {
    type: String,
    required: false,
  },
  albumReleaseDate: {
    type: String,
    required: false,
  },
  albumImage: {
    type: String,
    required: false,
  },
});
// export the model


export default mongoose.model("ReleaseRadarModel", releaseRadarSchema);
