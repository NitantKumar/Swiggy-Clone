const parent = React.createElement(
    "div",
    {id: "heading"},
    [React.createElement(
       "h1",
       {id: "heading1"},
       "this is 1 heading" 
    ), React.createElement(
        "h2",
        {id: "heading2"},
        "this is heading 2"
    )]
)
const root = ReactDOM.createRoot(document.body);
root.render(parent);
