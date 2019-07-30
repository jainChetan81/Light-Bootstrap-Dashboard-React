import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import NotificationSystem from "react-notification-system";
import Sidebar from "../components/Sidebar/Sidebar"; //TODO: this is sidebar nav and used here
import routes from "../routes.js"; //TODO: this is bringing different routes in routes.js and sent to index.js
import image from "../assets/img/faces/face-0.jpg";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: image,
            color: "black",
            hasImage: true
        };
    }
    handleNotificationClick = position => {};
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (
                            <prop.component
                                {...props}
                                handleClick={this.handleNotificationClick}
                            />
                        )}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    render() {
        return (
            <div className="wrapper">
                {/* <NotificationSystem ref="notificationSystem" style={style} /> */}
                <Sidebar
                    {...this.props}
                    routes={routes}
                    image={this.state.image}
                    color={this.state.color}
                    hasImage={this.state.hasImage}
                />
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <Switch>{this.getRoutes(routes)}</Switch>
                </div>
            </div>
        );
    }
}

export default Admin;
