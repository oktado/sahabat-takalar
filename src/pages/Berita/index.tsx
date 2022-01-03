import { lazy,useState } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));


const  Berita = (props) => {
    const [isModalOpen,setIsModalOpen] = useState(false)

    const fetchUrl = "https://jsonplaceholder.typicode.com/albums/1/photos"

    return(
        <>  
        <Container>   
            <MiddleBlock
                header={MiddleBlockContent.header}
                title={MiddleBlockContent.title}
                content={MiddleBlockContent.text}
                button={MiddleBlockContent.button}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                location={props.location.pathname}
                fetchUrl={fetchUrl}
            />
        </Container>
        </>
    )
} 


export default Berita


