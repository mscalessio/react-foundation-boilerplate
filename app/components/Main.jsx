var React = require('react');

var Main = (props) => {
  return (
    <div>
      <h1 className="text-center">Main.jsx Rendered</h1>
      {props.children}
    </div>
  )
};

module.exports = Main;
