function LawyerCard(props){
    const { lawyer } = props;
    
    return (
        <div className="card">
            <div className="image">
                <img alt="oh no!" src={lawyer.profile_pic_link} className="image" />
            </div>
            <div className="content">
                <div className="header">
                    <h3>{lawyer.first_name} {lawyer.last_name}</h3>
                </div>
            </div>
        </div>
    )
}

export default LawyerCard;