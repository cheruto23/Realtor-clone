import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../Firebase";
import { doc,updateDoc } from "firebase/firestore";
import { toast } from 'react-toastify';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;
  const [changeDetail, setChangeDetail] = useState(false);

  function onLogOut() {
    auth.signOut();
    navigate("/");
  }

  function onChange(e) {
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
        if(auth.currentUser.displayName !== name){
            //update display name in firebase auth
            await updateProfile(auth.currentUser,{
                displayName: name,
            });

            //update name in the firestore
            const docRef = doc(db,"users",auth.currentUser.uid)
            await updateDoc(docRef,{
                name,
            });
            toast.success("Profile details updated")
        }
    } catch (error) {
        toast.error("Could not update profile details")
    }
  }

  return (
    <>
      <section
        className="max-w-6xl mx-auto flex justify-center items-center
      flex-col"
      >
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`w-full px-4 py-2 text-xl text-gray-700
                     bg-white border border-gray-300 rounded transition ease-in-out
                      ${changeDetail && "bg-red-200 focus:bg-red-200"}`}
            ></input>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 my-2
                     bg-white border border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              disabled
            ></input>
            <div className="flex mb-6 justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center">
                Do you want to change your name?
                <span
                  onClick={() => {
                    if (changeDetail) {
                      onSubmit();
                    }
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>

              <p
                onClick={onLogOut}
                className="text-blue-600 hover:text-blue-800 transition ease-in-out
                duration-200 cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
