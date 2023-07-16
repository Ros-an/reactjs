const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Roc"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "local"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "ADOPT ME!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
