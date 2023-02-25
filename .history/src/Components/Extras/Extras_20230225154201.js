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
            <h2>
                Join our <strong>Global Recruitment Partner Network</strong> and <br/> access top talent wherever you are.
            </h2>
            <p>150+ companies from over 10 countries have joined our network since 2016</p>
            <img alt="partners" src="https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1590309858140-XJ7CNQPJOWQWP1GSERVR/RP%2Bpartner%2Blogos.jpg?format=2500w"/>
            <img alt="testimonial" src="https://images.squarespace-cdn.com/content/v1/5e4442200ffeee35974d1060/1592602342483-2G3F5RI556MOC508C6UK/Artboard+86%403x-100.jpg?format=1500w"/>
        </div>
    )
};
