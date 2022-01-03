import { lazy,useState } from "react";
import MultimediaContent from "../../content/MultimediaContent.json";
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const Header = lazy(() => import("../../components/Header"));


const Multimedia = (props) => {
    const [isModalOpen,setIsModalOpen] = useState(false)

    const fetchUrl = "https://jsonplaceholder.typicode.com/albums/1/photos"

    return(
        <>
        <Header/>  
        <Container>   
            <MiddleBlock
                header={MultimediaContent.header}
                title={MultimediaContent.title}
                content={MultimediaContent.text}
                button={MultimediaContent.button}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                location={props.location.pathname}
                fetchUrl={fetchUrl}
            />
        </Container>
        </>
    )
} 


export default Multimedia


