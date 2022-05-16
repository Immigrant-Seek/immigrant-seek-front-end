function ClientCard(props){
    const { client } = props;
    
    return (
        <div className="card">
            <div className="image">
                <img alt="oh no!" src={client.profile_pic_link} className="image" />
            </div>
            <div className="content">
                <div className="header">
                    <h3>{client.first_name} {client.last_name}</h3>
                </div>
            </div>
        </div>
    )
}

export default ClientCard;