
interface PortProperties {
    content: String;
    author: String
}

export function Post(props: PortProperties) {
    


    return (
        <>
        
         <p><strong>{ props.author }</strong>: { props.content }</p>
        
        </>
    )
}