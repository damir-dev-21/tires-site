function Modal({show,title}) {
    if(show){
        return (
            <div className="modal" >
                <div className="modal-block">
                    <h3>{title}</h3>
                </div>
            </div>
        )
    }
   
}

export default Modal