
class NotesCard extends React.Component {


    render(){
        return (
            <Consumer>
                {
                    value=>{
                        const {notes}= value;
                        return (
                            <div className="row mt-5">
                                {
                                    notes.map(data=> (
                                        <Note key={data.id}  
                                            id={data.id}
                                            title= {data.note_name} 
                                            text={data.note} 
                                        />       
                                    ))
                                }
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}