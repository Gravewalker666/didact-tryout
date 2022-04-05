var element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello"
    }
};
var container = document.getElementById("root");
var node = document.createElement(element.type);
node["title"] = element.props.title;
var text = document.createTextNode("");
text["nodeValue"] = element.props.children;
node.appendChild(text);
container.appendChild(node);


//# sourceMappingURL=app.js.map