import HelloWorld from "./HelloWorld.vue";

HelloWorld.install = function (app: any) {
  app.component("HelloWorld", HelloWorld);
};

export { HelloWorld };
