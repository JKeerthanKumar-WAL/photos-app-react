import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Layout = (props) => {
    const [modal, setModal] = useState(false);
    const show = () => setModal(!modal);
    const { imgthumbnailurl, img } = props;
    return (
        <div>
            <img
                src={imgthumbnailurl}
                alt="Image of album needs to be displayed"
                onClick={show}
            />
            <Modal isOpen={modal} toggle={show}>
                <ModalHeader>The full view of image is </ModalHeader>
                <ModalBody>
                    <img src={img} alt="Image in modal" />
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-danger" onClick={show}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
export default Layout;
