import React from "react";
import { Pen, Save, X } from "lucide-react";
import SpinningLoader from "@/components/SpinningLoader";

// Profile Essentials
import SectionOne from "@/components/profile/SectionOne";
import SectionTwo from "@/components/profile/SectionTwo";
import SectionThree from "@/components/profile/SectionThree";
import profileFetchDataGetApiCall from "@/services/profileFetchData";
import profileHandleUpdateData from "@/lib/profileHandleUpdateData";

// ShadCN Components
import { Button } from "@/components/ui/button";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { setEditProfile } from "@/reduxToolkit/slices/profileDetailsSlice";

const ProfilePage = () => {
  // Update button loading state which calls an API when clicked
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: RootState) => state.profileDetailsSliceReducer,
  );

  React.useEffect(() => {
    state.email === "" && profileFetchDataGetApiCall(dispatch);
  }, []);

  if (!state.email) return <SpinningLoader size={24} />;

  return (
    <main className="py-8 mx-41.25 m-auto">
      {/* Introduction With Buttons */}
      <section className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <p className="text-3xl font-bold">Your Profile</p>
          <p className="text-muted-foreground">
            Manage your personal information and preferences
          </p>
        </div>
        <div>
          {!state.editProfile ? (
            <Button
              onClick={() => dispatch(setEditProfile())}
              className="border border-input px-4 py-2 text-sm ring-offset-background bg-background hover:bg-secondary"
            >
              <span>
                <Pen />
              </span>
              <span>Edit Profile</span>
            </Button>
          ) : (
            <div className="flex gap-2 items-center">
              <Button
                onClick={() => {
                  dispatch(setEditProfile());
                  profileFetchDataGetApiCall(dispatch);
                }}
                className="border border-input px-4 py-2 text-sm ring-offset-background bg-background hover:bg-secondary"
              >
                <span>
                  <X />
                </span>
                <span>Cancel</span>
              </Button>
              <Button
                onClick={() => profileHandleUpdateData(dispatch, state, setIsLoading)}
                disabled={isLoading}
                className="text-secondary font-semibold px-4 py-2 bg-[#12d393] hover:bg-[#12d393e6] hover:shadow-[0_0_20px_#12d39366]"
              >
                <span>
                  {isLoading ? (
                    <SpinningLoader size={4} color="dark" />
                  ) : (
                    <Save />
                  )}
                </span>
                <span>Update</span>
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="space-y-6">
        {/* Section-1: Personal Information */}
        <SectionOne />

        {/* Section-2: Body Metrics */}
        <SectionTwo />

        {/* Section-3: Training Preferences */}
        <SectionThree />
      </section>
    </main>
  );
};

export default ProfilePage;
