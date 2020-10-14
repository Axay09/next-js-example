import React from "react";
import FilterStyle from "./filter.style";
import Genres from "./component/geners"
import Regions from "./component/regions"
import Dates from "./component/dates"
import Tags from "./common/tags";
const Filters = () => {

    return (
        <>
            <div className="v138_0">
                <div className="v136_0 col-md-6">
                    <Genres />
                    <Regions />
                    <Dates />
                </div>
                <div className="v136_2 col-md-6">
                    <span className="v135_114">Sort by: Date</span>
                    <div className="v135_142">
                        <div className="v144_111">
                            <span className="v135_115" style={{ color: "white" }}>Grid  </span>
                            <div className="v135_129">
                                <div className="v135_123"></div>
                                <div className="v135_126"></div>
                                <div className="v135_124"></div>
                                <div className="v135_127"></div>
                                <div className="v135_125"></div>
                                <div className="v135_128"></div>
                            </div>
                        </div>
                        <div className="v158_576">
                            <span className="v135_116">Schedule</span>
                            <div className="v271_5125">
                                <div className="v271_5126">
                                    <div className="v271_5127"></div>
                                </div>
                            </div>
                            <div className="v135_141">
                                <div className="v144_110">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Tags />
                <span className="a133_814">💖 SAVE THIS SEARCH</span>
            </div>
            <style jsx>{FilterStyle}</style>
        </>
    )
}

export default Filters;