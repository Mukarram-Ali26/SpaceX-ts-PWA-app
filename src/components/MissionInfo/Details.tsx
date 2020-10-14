import React from 'react';
import {LaunchMissinInfoQuery} from '../../generated/graphql';
import './Details.css';


interface Props {
    data: LaunchMissinInfoQuery;
  }

 const Details:React.FC<Props> = ({data}) => {

    if (!data.launch) {
        return <div>No launch available</div>;
      }

    return (
        <div  >
      <div >
        <h6><span style={{color:'blue'}}>Flight Number:</span> {data.launch.flight_number} 
        <br />
        <span style={{color:'blue'}}>Mission Name:</span> {data.launch.mission_name}:
        {data.launch.launch_success ? (
          <span style={{ color: 'green' }}>Success</span>
        ) : (
          <span style={{ color: 'red' }}>Failed</span>
        )}
        </h6>
      </div>
      <h6 >              
      <span style={{color:'blue'}}>Launch Year:</span> {data.launch.launch_year}
        <br />
        <span style={{color:'blue'}}>Launch Site:</span> {data.launch.launch_site?.site_name}
        <br />
        <span style={{color:'blue'}}>{data.launch.rocket &&
          ` Rocket Name: ${data.launch.rocket.rocket_name}  Type of ${data.launch.rocket.rocket_type}`}</span>
      </h6>
       <h6 ><span style={{color:'blue'}}>Launch Details:</span> {data.launch.details}</h6>
       <h6 ><span style={{color:'blue'}}>Video Link:</span><span style={{color:'green'}}> {data.launch.links?.video_link}</span></h6>
       {/* <div className='img'>
        <h6> Images</h6> (if found): {data.launch.links?.flickr_images}
          </div> */}
       <h6> Images</h6> (if found):
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div >
          
      {/* <p><a href={data.launch.links?.video_link}>Video Link</a></p> */}
           {data.launch.links.flickr_images.map(image =>
            image ? <img className='img' src={image}  key={image} alt="Detailed Images" /> : null,
          )}
        </div>
      )} 
      {/* <div>
          {data.launch.flight_number}
          {data.launch.mission_name}
          {data.launch.launch_success}
          {data.launch.launch_year}
          {data.launch.launch_site?.site_name}
          {data.launch.details}
          {data.launch.rocket?.rocket_name}
          {data.launch.rocket?.rocket_type}
          {data.launch.links?.video_link}
          {data.launch.links?.flickr_images}
      </div> */}
    </div>
    );
}

export default Details;
