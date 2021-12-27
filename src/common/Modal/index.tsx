

import { Modal } from 'antd';
import { withTranslation } from "react-i18next";

import './index.css'


interface ModalContentProps {
   closeModal? : () => void;
   visible?: boolean;
  }

const ModalContent = ({closeModal,visible} : ModalContentProps) => {
return(
<>
{/* //   <div className='container-modal'>
//       <img className='img-modal'/>
//       <div className='container-text-modal'>
//         <p className='date'></p>
//         <p className='title-modal'></p>
//         <p className='text-modal'></p>
//       </div>
//   </div> */}
  <Modal
  style={{padding:"45px",top:"50px",background:"#202020"}}
  centered
  visible={visible}
  onOk={closeModal}
  onCancel={closeModal}
  width={1216}
  footer={null}
  className='container-modal'
>
<div className='container-img-modal'>
    <img className="img-modal" src='img/icons/logo192.png' />
</div>
<div className='container-text-modal'>
<p className='date'>March 2, 2022</p>
  <p className='title-modal'>The services provide for design</p>
  <p className='text-modal'>Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br/> Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id.
Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae nisi tortor. Morbi leo nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit bibendum. Morbi nec efficitur ex.</p>
</div>
</Modal>
</>
    )
};

export default withTranslation()(ModalContent);