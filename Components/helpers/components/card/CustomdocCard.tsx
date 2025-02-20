import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name?: string;
  skill?: string;
  id: number;
  profile?: any;
};
const CustomdocCard: React.FC<Props> = ({ name, skill, id, profile = '' }) => {
  return (
    <div data-aos="fade-up" className="pb-5 pb-md-10 ">
      <Link href={`/specialist/${id}`}>
        <div className="rounded-3  custom-doc-card mx-md-5 position-relative overflow-hidden">
          <Image className="img-fluid img-hover-effect  w-100" src={profile} alt="doc card" />
          <div className="w-100 h-100 position-absolute z-1 bottom-0 doc-info"></div>
          <div className="position-absolute w-100  text-white fs-16px start-0 bottom-0  ">
            <p style={{ backdropFilter: "blur(4px)", backgroundColor: "rgba(255, 255, 255, 0.32)" }} className="p-3 py-md-4 ps-10">វេជ្ជបណ្ឌិត {name}<br />ឯកទេស {skill}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CustomdocCard;
