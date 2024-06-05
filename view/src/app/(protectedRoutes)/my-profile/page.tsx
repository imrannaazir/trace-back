"use client";
import { useState } from "react";
import MyBasicInfoCard from "./components/MyBasicInfoCard";
import UpdateMyProfileData from "./components/UpdateMyProfileDataForm";
import { useGetProfileQuery } from "@/redux/api/profile.api";
import MyAllClaimRequest from "./components/MyAllClaimRequest";
import MyAllFoundItems from "./components/MyAllFoundItem";
import MyAllLostItems from "./components/MyAllLostItem";

const MyProfilePage = () => {
  // api hook
  const { data: myProfileData, isFetching } = useGetProfileQuery(undefined);
  const [isEditing, setIsEditing] = useState(false);

  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <div className="space-y-4">
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

      {/* my all claims */}
      <MyAllClaimRequest />

      {/*  my all found items  */}
      <MyAllFoundItems />

      {/* my all lost items */}
      <MyAllLostItems />
    </div>
  );
};

export default MyProfilePage;
