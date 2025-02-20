import Search from "@assets/icon/home-page/search.svg";
import Image from "next/image";
import {FC, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";
import clsx from "clsx";

type Props = {
    className?: string;
    hover?: string;
    btnBorder?: string;
    width?: string;
};

const CustomSearch: FC<Props> = ({className, btnBorder, width, hover}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState<string>("");
    const [focus, setFocus] = useState<true | false>(false)

    useEffect(() => {
        const searchQuery = searchParams.get("query");
        if (searchQuery) {
            setSearch(searchQuery);
        }
    }, [searchParams]);

    const handleSearch = (e: any) => {
        if (e.type === "click" || e.key === "Enter") {
            router.push(`/search?query=${search}`);
        }
    };

    return (
        <div>
            <div className="row mt-8">
                <div className="col-12 ">
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <div className={`input-group flex-nowrap ${width}`}>
                            <input
                                className={clsx(`form-control h-40px radius-start-35px border-0 outline-none ${className}`, {[hover || ""]: focus})}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="ស្វែងរកអត្ថបទសុខភាព"
                                onFocus={() => {
                                    setFocus(true)
                                }}
                                onBlur={() => {
                                    setFocus(false)
                                }}
                                onKeyDown={handleSearch}
                            />
                            <span className="input-group-append -ms-17px">
                <button
                    className={clsx(`btn z-index-90 d-flex align-items-center rounded-0 h-40px radius-end-35px bg-white border-0 border ${btnBorder}`, {[hover || ""]: focus})}
                    type="button"
                    onClick={handleSearch}
                >
                  <span className="bg-default-blue radius-25px px-5">
                    <Image src={Search} alt="Search"/>
                  </span>
                </button>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomSearch;
