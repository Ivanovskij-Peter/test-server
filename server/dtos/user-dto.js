module.exports = class UserDto {
  email;
  id;
  isActive;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActive = model.isActive;
  }
};
