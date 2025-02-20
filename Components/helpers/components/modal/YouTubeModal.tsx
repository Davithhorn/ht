import {FC} from "react";
import {Container} from "react-bootstrap";

type YouTubeModalProps = {
    id: string | null;
    onClose: () => void;
    rounded?:boolean;
};

const YouTubeModal: FC<YouTubeModalProps> = ({id, onClose, rounded}) => {
    return (
        <div
            className="modal fade show d-block"
            id="kt_modal_1"
            tabIndex={-1}
            onClick={onClose}
        >
            <Container>
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div>
                            <iframe
                                className={rounded ? 'rounded' : ''}
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/3GndX9L5IFk"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                title="YouTube Video"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default YouTubeModal;
