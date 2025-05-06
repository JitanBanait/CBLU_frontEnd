let h1 = React.createElement("h1", {
    id: "hello",
    className: "abc"
}, [
    React.createElement("p", {
        id: "hellop",
        className: "abc"
    }, "Hello  one from React"),
    React.createElement("p", {
        id: "hellop2",
        className: "abc"
    }, "Hello  from React")
]);
let root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(h1);

//# sourceMappingURL=Parcel.7c0ccee6.js.map
