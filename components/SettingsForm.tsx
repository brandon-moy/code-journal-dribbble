"use client";
import { UserProfile } from "@/common.types";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import FormField from "./FormField";
import Button from "./Button";
import { fetchToken, updateUser } from "@/lib/actions";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  user: UserProfile;
};

const SettingsForm = ({ user }: Props) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarUrl,
    description: user?.description || "",
    githubUrl: user?.githubUrl || "",
    linkedinUrl: user?.linkedinUrl || "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { token } = await fetchToken();

    try {
      await updateUser(userInfo, user.id, token);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.includes("image"))
      return alert("Please upload an image file");

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;
      handleStateChange("avatarUrl", result);
    };
  };

  const handleStateChange = (fieldName: string, value: string) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <>
      {isSubmitting && <LoadingSpinner />}
      <form onSubmit={handleFormSubmit} className="flexStart form">
        <div className="flexStart form_image-container">
          <label
            htmlFor="poster"
            className="flexCenter form_image-label min-h-[200px] md:min-h-[400px]"
          >
            {!user.avatarUrl && "Choose a image for your profile"}
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            className="form_image-input"
            onChange={handleChangeImage}
          />
          {user.avatarUrl && (
            <Image
              src={userInfo.avatarUrl}
              className="sm:p-10 object-contain z-20"
              alt="project poster"
              fill
            />
          )}
        </div>
        <FormField
          title="Description"
          state={userInfo.description}
          placeholder={userInfo.description || "Software Developer"}
          setState={(value) => handleStateChange("description", value)}
        />
        <FormField
          type="url"
          title="GitHub Url"
          state={userInfo.githubUrl}
          placeholder={userInfo.githubUrl || "https://github.com/..."}
          setState={(value) => handleStateChange("githubUrl", value)}
        />
        <FormField
          type="url"
          title="LinkedIn URL"
          state={userInfo.linkedinUrl}
          placeholder={
            userInfo.linkedinUrl || "https://www.linkedin.com/in/..."
          }
          setState={(value) => handleStateChange("linkedinUrl", value)}
        />
        <div className="flexStart w-full">
          <Button
            title="Update Settings"
            type="submit"
            leftIcon={isSubmitting ? "" : "/plus.svg"}
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </>
  );
};

export default SettingsForm;
