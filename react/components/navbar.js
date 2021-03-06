


class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar bg-success navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">Notepad</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <button type="button" class="btn" data-toggle="modal" data-target="#noteModal">
                            Create Note
                        </button>    
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}