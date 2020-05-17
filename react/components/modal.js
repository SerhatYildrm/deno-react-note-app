


class Modal extends React.Component {

    addNote= (dispatch,e)=>{

        const createdId = Math.random()+1;
        const noteName = this.noteName.value;
        const note = this.note.value;

        if(noteName == "" && note == "")
            return false;
        

        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: createdId,
                note_name : noteName,
                note: note
            })
        }
        fetch("http://127.0.0.1:9999/notes", requestOptions)
        .catch(error => {
            console.error("hata oluştu");
        });

        dispatch({ type:"ADD_NOTE", 
            payload:{id : createdId, note_name : noteName, note: note}});   
    }
    render() {
        return (
            <Consumer>
                {
                    value=> {

                        const {dispatch} = value;

                        return (
                            <div class="modal fade " id="noteModal" tabIndex="-1" role="dialog" aria-labelledby="noteModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header bg-success">
                                        <h5 class="modal-title" id="exampleModalLabel">Creating Your Note</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label htmlFor="noteNameInput">Name</label>
                                                <input type="text" class="form-control" id="noteNameInput" 
                                                   ref={(c) => this.noteName = c}
                                                   aria-describedby="noteName" />
                                            </div>
                
                                            <div class="form-group">
                                                <label htmlFor="noteInput">Note</label>
                                                <textarea class="form-control" id="noteInput" rows="3"
                                                    ref={(c) => this.note = c}
                                                ></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="Submit" 
                                            onClick = {this.addNote.bind(this,dispatch)}
                                        class="btn btn-primary" data-dismiss="modal">Save</button>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                        
                    }
                }
            </Consumer>
        )
        
    }
}