"use client";
import { SessionInterface, UserProfile } from "@/common.types";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import FormField from "./FormField";
import Button from "./Button";
import { fetchToken, updateUser } from "@/lib/actions";

type Props = {
  user: UserProfile;
  session: SessionInterface;
};

const SettingsForm = ({ user, session }: Props) => {
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
      await updateUser(userInfo, session?.user?.id, token);
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
      handleStateChange("image", result);
    };
  };

  const handleStateChange = (fieldName: string, value: string) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!user.avatarUrl && "Choose a poster for your project"}
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
            src={user.avatarUrl}
            className="sm:p-10 object-contain z-20"
            alt="project poster"
            fill
          />
        )}
      </div>
      <FormField
        title="Description"
        state={user.description || ""}
        placeholder={user.description || "Software Developer"}
        setState={(value) => handleStateChange("description", value)}
      />
      <FormField
        type="url"
        title="GitHub Url"
        state={user.githubUrl || ""}
        placeholder={user.githubUrl || "https://github.com/. . ."}
        setState={(value) => handleStateChange("githubUrl", value)}
      />
      <FormField
        type="url"
        title="LinkedIn URL"
        state={user.linkedinUrl || ""}
        placeholder={user.linkedinUrl || "htts://www.linkedin.com/in/. . ."}
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
  );
};

export default SettingsForm;
