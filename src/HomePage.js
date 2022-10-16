export default function HomePage(props){
    let images = ["https://storage.googleapis.com/2022fundraising-website/3638/south","https://storage.googleapis.com/2022fundraising-website/539blossom/south","https://storage.googleapis.com/2022fundraising-website/825/south","https://storage.googleapis.com/2022fundraising-website/61castro/south"]
    let elements = []
    for (let elem in images){
        elements.push(<img width={"100%"} src={images[elem]} />)
    }
    return(
        <div>
            {elements}
        </div>
    )
}