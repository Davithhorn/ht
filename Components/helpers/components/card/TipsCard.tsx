import useModal from "@assets/ts/hook/Modal";
import Image from "next/image";
import React from "react";
import { Modal } from "react-bootstrap";
import YouTubeModal from "../modal/YouTubeModal";
import PLay from "@assets/icon/home-page/play.svg";
import tips5cardimg from '@assets/kilo-health-image/home-page/5tip-card1.png'

const TipsCard = () => {
  const { onHide, onShow, value } = useModal();
  return (
    <div>
      <div onClick={onShow} className="cursor-pointer">
        <div className="card card-hover-back bg-transparent" style={{maxWidth: '272px'}}>
          <div className="position-relative" >
            <Image
              src={tips5cardimg}
              layout="responsive"
              alt="portrait"
            />
            <div className="overlay"></div>
            <Image
              src={PLay}
              alt="play"
              className="position-absolute bottom-6px end-6px"
            />
          </div>
        </div>
      </div>
      <Modal  show={value} onHide={onHide} backdrop={true} centered>
        <YouTubeModal  id={null} onClose={onHide} />
      </Modal>
    </div>
  );
};  

export default TipsCard;
