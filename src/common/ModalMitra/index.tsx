

import { Modal,Row,Col } from 'antd';
import { withTranslation } from "react-i18next";

import './index.css'


interface ModalContentProps {
   closeModalMitra? : () => void;
   visibleModalMitra?: boolean;
  }

const ModalMitra = ({closeModalMitra,visibleModalMitra} : ModalContentProps) => {
return(
<>
  <Modal
  title="MITRA"
  style={{padding:"45px",top:"80px",background:"#202020"}}
  centered
  visible={visibleModalMitra}
  onOk={closeModalMitra}
  onCancel={closeModalMitra}
  width={1216}
  footer={null}
>
<Row>
  <Col xl={11} lg={11} md={11} sm={24} xs={24} >
  <div className='container-img-modal-mitra'>
    <img className="img-modal-mitra" src='img/svg/takalar-logo.png' />
  </div>
  </Col>
  <Col  xl={13} lg={13} md={13} sm={24} xs={24}>
  <div className='container-text-modal-mitra'>
<p className='info-modal-mitra'>March 2, 2022</p>
  <p className='title-modal-mitra'>The services provide for design</p>
  <p className='text-modal-mitra'>Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br/> Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id.
    Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae nisi tortor. Morbi leo nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit bibendum. Morbi nec efficitur ex.</p>
</div>
  </Col>
</Row>
</Modal>
</>
    )
};

export default withTranslation()(ModalMitra);