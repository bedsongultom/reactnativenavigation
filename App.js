import React, { Component, Fragment } from "react";
import StackNav from "./src/navigation/StackNav";

class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Fragment>
                <StackNav/>
            </Fragment>
        )
    }
}
export default App;