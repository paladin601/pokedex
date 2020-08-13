module.exports = function (express, app, staticFolder) {
    app.use("/", express.static(staticFolder));
    app.use("/detail/:id", express.static(staticFolder));
    //app.use("/help", express.static(staticFolder));//example add other routes in react
}