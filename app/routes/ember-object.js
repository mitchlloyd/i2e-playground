export default Ember.Route.extend({
  model() {
    let dog = Ember.Object.create({ name: "Ellie" });
    let cat = { name: "Tubs" };

    window.dog = dog;
    window.cat = cat;

    return { dog, cat }
  }
});
