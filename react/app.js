

class App extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Modal />
                <NotesCard />
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById("app"));
