export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // {lat: 0.41543, lng: 231.5282}
    this.id = new Date().toString() + Math.random().toString();
  }
}
