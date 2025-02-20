import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import product1 from "../../../../assets/icon/image/skill/product1.png"; // Replace with actual image path

export default function ModernBox() {
    return (
        <Row className="custom-box">
            {/* Left Box */}
            <Col md={4}>
                <div className="info-box">c</div>
            </Col>

            {/* Right Box */}
            <Col md={8} className="content-box">
                <div className="image-container">
                    <Image src={product1} alt="Product Image" width={600} height={600} className="product-image" />
                </div>

                <div className="tags">
                    <span className="tag">React JS</span>
                    <span className="tag">Web Development</span>
                </div>
            </Col>

            <style jsx>{`
        .custom-box {
          padding: 30px;
          display: flex;
          align-items: center;
        }

        .info-box {
          background: linear-gradient(135deg, #ffcc00, #ff8800);
          padding: 50px;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          color: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .content-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          //background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          border-radius: 20px;
          object-fit: cover;
          width: 100%;
          height: auto;
        }

        .tags {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .tag {
          background: #000;
          //color: #fff;
          padding: 15px 20px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-in-out;
        }

        .tag:hover {
          transform: scale(1.05);
        }
      `}</style>
        </Row>
    );
}
