export default function Friend(props){
    const {name, email} = props;
    return(
        <div>
            <h4>Name: {name}</h4>
            <p>Email: {email} </p>
        </div>
    )    
}