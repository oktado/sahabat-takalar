import {useState,useEffect} from 'react'
import {Row,Col,Button} from 'antd'
import ReactPaginate from 'react-paginate';
import { CardProps, } from "../types";
import { CardWrapper } from "./styles";
import { Fade } from "react-awesome-reveal";
import axios  from 'axios'
import './index.css'


const CardArr = [
  {

  }
]



export const CardNews = ({
    img,
    header,
    title,
    content,
    showModalContent
  }: CardProps) => {
    const [dataSource,setDataSource] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0)
    const [pageSize,setPageSize] = useState(3);

  const fetchData = async() => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
    const dataSource = res.data;
    const slice = dataSource.slice(offset, offset + pageSize)
    const postData = slice.map(pd => 
      <div className="container-card">
        <div className="container-img">
          <img className='img-card' src={pd.url} height="248px" width="100%" />
        </div>
          <p className='title-card'>{pd.title}</p>
          <p className='header-card'>{pd.title}</p>
      </div>)
    setDataSource(postData)
    setPageCount(Math.ceil(dataSource.length / pageSize))                 
}

const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setOffset(selectedPage + 1)  
};

    useEffect(() => {
      fetchData();
    },[offset,pageSize])

    return (
    <>
      <Fade triggerOnce={true} >
      <CardWrapper onClick={showModalContent} >
     {dataSource}
      </CardWrapper>
      <div className='container-pagination'>
        {pageSize !== 6 && <div className='btn-show-more' onClick={() => setPageSize(6)}>SHOW MORE</div>}
        {
          pageSize === 6 &&
          <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName='pagination'
          activeClassName="active"/>
        }                         
      </div>
      </Fade>
    </>
    )
  }
    