"use client";
import { useState } from "react";
import MyBasicInfoCard from "./components/MyBasicInfoCard";
import UpdateMyProfileData from "./components/UpdateMyProfileDataForm";
import { useGetProfileQuery } from "@/redux/api/profile.api";

const MyProfilePage = () => {
  // api hook
  const { data: myProfileData, isFetching } = useGetProfileQuery(undefined);
  const [isEditing, setIsEditing] = useState(false);

  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {!isEditing ? (
        <MyBasicInfoCard
          profile={myProfileData?.data}
          setIsEditing={setIsEditing}
        />
      ) : (
        <UpdateMyProfileData
          profile={myProfileData?.data}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default MyProfilePage;
