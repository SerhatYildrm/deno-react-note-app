

const Context = React.createContext();


const reducer = (state, action) => {
    switch(action.type){
        case "DELETE_NOTE":
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
            
    }
}


class Provider extends React.Component {
    state = {
        notes: [],
        dispatch : (action)=> {
            this.setState(state=> reducer(state,action));
        }
    }

    componentDidMount(){
        fetch("http://127.0.0.1:9999/notes")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({notes: result})
                }
            )
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;


