class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat: 0.41543, lng: 231.5282}
    this.id = new Date().toString() + Math.random().toString();
  }
}
