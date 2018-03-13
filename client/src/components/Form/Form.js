import React from "react";

const Form = props => (
    <div className="form-group">
        <input className="form-control input" type="text" {...props} />
        <button type="submit" className="btn btn-primary" method="post">Submit</button>
    </div>
);

export default Form;