import React from "react";
import { useJobByIdQuery } from "../features/job/jobApi";
import meeting from "../assets/meeting.jpg";
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
const JobDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useJobByIdQuery(id);
  // console.log(data?.data);
  const {
    companyName,
    position,
    location,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    skills,
    requirements,
    responsibilities,
    overview,
    queries,
    _id,
  } = data?.data || {};

  return (

    <div>
      <p>{companyName}</p>
      <p>{position}</p>
      <p>{location}</p>
      <p>{experience}</p>
      <p>{workLevel}</p>
      <p>{employmentType}</p>
      <p>{salaryRange}</p>
      <p>{skills}</p>
      <p>{requirements}</p>
      <p>{responsibilities}</p>
      <p>{overview}</p>
      <p>{queries}</p>
    </div>
  );
};

export default JobDetails;
