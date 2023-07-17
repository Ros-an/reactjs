const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "ADOPT ME!"),
    React.createElement(Pet, {
      name: "koibhi_1",
      animal: "dog",
      breed: "local",
    }),
    React.createElement(Pet, {
      name: "koibhi_2",
      animal: "dog_1",

      breed: "sehar_ka",
    }),
    React.createElement(Pet, {
      name: "koibhi_3",
      animal: "dog_2",
      breed: "bazaar_ka",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
