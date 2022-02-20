"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const isInvalidValue = (text) => !text || text.trim() === "";

  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  // server side validation
  for (const item of Object.entries(meal)) {
    if (isInvalidValue(item[1])) throw new Error("All fields are required!");
    if (item[0] === "creator_email" && !item[0].includes("@"))
      throw new Error("Email field is required!");
    if (item[0] === "image" && item[0].size === 0)
      throw new Error("Image field is required!");
  }

  await saveMeal(meal);
  redirect("/meals");
}
