import PhotoDesc from "../PhotoDesk/PhotoDesc"

export default function Extras(params) {
    return(
        <div className="extras">
            <PhotoDesc
                image={"https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1589973282712-M6FIASPLFKWN5O5HP6YZ/Artboard+4+copy%402x-100.jpg?format=1000w"}
                top="Our graduates are"
                strong="market ready."
                firstLine="Students go through deep technical training,"
                secondLine="including robust theory and intensive coding,"
                thirdLine="with emphasis on critical thinking and can-"
                fourthLine="do attitude."  
            />
        </div>
    )
};
