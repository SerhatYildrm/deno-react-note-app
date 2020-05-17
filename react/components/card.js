
class Note extends React.Component {
    
    deleteNote = (dispatch, e) => {
        const {id} = this.props;
       dispatch({ type: "DELETE_NOTE", payload: id})
       fetch("http://127.0.0.1:9999/notes/" + id,{method: "DELETE"});
    }

    render(){
        const {title, text} = this.props;
        return (
            <Consumer>
                {
                    value=> {
                        const {dispatch} = value;
                        return (
                            <div class="card col-3 ml-5 mt-3">
                                <div class="card-body">
                                    <h3> {title} </h3>
                                    <p> {text}</p>
                                    <button class="btn btn-success card-link" 
                                    onClick={this.deleteNote.bind(this,dispatch)}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}