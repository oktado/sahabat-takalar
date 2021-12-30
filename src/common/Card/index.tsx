import {useState,useEffect} from 'react'
import {Row,Col,Pagination} from 'antd'
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
    const [totalPages,setTotalPages] = useState(1);
    const [loading,setLoading] = useState(false);


    useEffect(() => {
      fetchData();
    },[])

    const fetchData = () => {
      setLoading(true)
      axios.get('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
      .then((res) => {
          setDataSource(res.data.data)
          setTotalPages(res.data.totalPages)
          setLoading(false)
      })
    }


    return (
    <>
      <Fade triggerOnce={true} >
      <CardWrapper onClick={showModalContent} >
      {dataSource.map((data) => {
        return (
          <div className="container-card" >
        <div className="container-img">
        <img className='img-card' src={img} height="248px" width="100%" />
        </div>
          <p className='title-card'>{data.name}</p>
          <p className='header-card'>{data.trips}</p>
         </div>
        )
      }) }
     
      </CardWrapper>
      <div className='m-auto'>
        <Pagination/>
      </div>
      </Fade>
    </>
    )
  }
    